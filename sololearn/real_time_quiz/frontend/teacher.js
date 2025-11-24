
        const socket = io();

        const name = prompt("Enter your name:");
        const role = window.location.pathname.includes('teacher') ? 'Teacher' : 'Student';

        socket.emit('joinQuiz', { name, role });

        socket.on('studentAnswer', (data) => {
            const log = document.getElementById('log');
            const timestamp = new Date().toLocaleTimeString();
            log.textContent += `[${timestamp}] Student ${data.id} answered: ${data.answer}\n`;
            log.scrollTop = log.scrollHeight;
        });

        socket.on('updateScores', (scores) => {
            const scoreBoard = document.getElementById('scoreBoard');
            const totalStudentsEl = document.getElementById('totalStudents');
            const averageScoreEl = document.getElementById('averageScore');
            
            const students = Object.values(scores).filter(user => user.role === 'Student');
            const totalStudents = students.length;
            
            if (totalStudents === 0) {
                scoreBoard.innerHTML = '<div class="empty-state">No students connected yet...</div>';
                totalStudentsEl.textContent = '0';
                averageScoreEl.textContent = '0%';
                return;
            }

            totalStudentsEl.textContent = totalStudents;
            
            const averageScore = students.reduce((sum, student) => sum + student.score, 0) / totalStudents;
            averageScoreEl.textContent = Math.round(averageScore) + '%';

            // Sort students by score (highest first)
            const sortedStudents = students.sort((a, b) => b.score - a.score);

            scoreBoard.innerHTML = '';
            sortedStudents.forEach((student, index) => {
                const scoreCard = document.createElement('div');
                scoreCard.className = 'score-card slide-in';
                scoreCard.style.animationDelay = `${index * 0.1}s`;
                
                const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '👤';
                
                scoreCard.innerHTML = `
                    <div class="student-info">
                        <div class="student-name">${medal} ${student.name}</div>
                        <div class="student-role">${student.role}</div>
                    </div>
                    <div class="student-score">${student.score}</div>
                `;
                
                scoreBoard.appendChild(scoreCard);
            });
        });

        // Add some initial animation
        setTimeout(() => {
            document.querySelector('.dashboard-container').style.opacity = '1';
        }, 100);