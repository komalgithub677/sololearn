import React, { useState, useEffect } from "react";
import CoursePlayer from "./me";
import axios from "axios";
import PreTest from "./PreTest.tsx";

// === EMBEDDED DATA ===
const lessons = [
  {
    id: 1,
    title: "Introduction to Generative AI",
    description: "Generative AI is a transformative field of artificial intelligence focused on creating new content, from text and images to music and code. This course introduces you to the fundamentals of generative AI, covering key concepts, models, and applications. Learn how to leverage tools like GANs, VAEs, and transformers to build innovative AI solutions!",
    xp: 10,
    chapters: [
      {
        id: 1,
        title: "Introduction to Generative AI",
        isExpanded: true,
        lessons: [
          {
            id: 1,
            title: "What is Generative AI?",
            type: "text",
            content: `<p>Generative AI refers to algorithms that can generate new content, such as text, images, or audio, based on patterns learned from data.</p>
<ul>
  <li><strong>Creates original outputs</strong></li>
  <li>Uses models like GANs and transformers</li>
  <li>Applications in art, writing, and more</li>
</ul>
<p><strong>Example application:</strong> Generating realistic images from text descriptions.</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 2,
            title: "Key Concepts",
            type: "text",
            content: `<p>Core concepts in generative AI:</p>
<ul>
  <li><strong>Training Data:</strong> Large datasets used to train models.</li>
  <li><strong>Latent Space:</strong> A compressed representation of data.</li>
  <li><strong>Loss Functions:</strong> Metrics to optimize model performance.</li>
</ul>
<p><strong>Example:</strong> A text generator learns patterns from thousands of books to produce coherent stories.</p>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 3,
            title: "Types of Generative Models",
            type: "text",
            content: `<p>Common generative models include:</p>
<ul>
  <li><strong>GANs (Generative Adversarial Networks):</strong> Two networks (generator and discriminator) compete to create realistic outputs.</li>
  <li><strong>VAEs (Variational Autoencoders):</strong> Encode and decode data for generation.</li>
  <li><strong>Transformers:</strong> Used in text generation (e.g., GPT models).</li>
</ul>
<p><strong>Example:</strong> GANs generating photorealistic faces.</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 4,
            title: "Applications of Generative AI",
            type: "text",
            content: `<p>Generative AI is used in:</p>
<ul>
  <li><strong>Text Generation:</strong> Chatbots, story writing</li>
  <li><strong>Image Generation:</strong> Art, photo editing</li>
  <li><strong>Audio Generation:</strong> Music, voice synthesis</li>
  <li><strong>Code Generation:</strong> Automating programming tasks</li>
</ul>
<p><strong>Example:</strong> Tools like DALL·E create images from text prompts.</p>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 5,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your knowledge of Generative AI fundamentals.</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [
              {
                type: "mcq",
                question: "What does generative AI create?",
                options: ["New content", "Databases", "Hardware", "Websites"],
                correctAnswer: "New content"
              },
              {
                type: "fill",
                question: "Fill in the blank: GAN stands for ____ Adversarial Network.",
                correctAnswer: "Generative"
              },
              {
                type: "mcq",
                question: "Which is a type of generative model?",
                options: ["GAN", "SVM", "K-Means", "Decision Tree"],
                correctAnswer: "GAN"
              },
              {
                type: "mcq",
                question: "What is a common application of generative AI?",
                options: [
                  "Image generation",
                  "Network security",
                  "Data sorting",
                  "File compression"
                ],
                correctAnswer: "Image generation"
              },
              {
                type: "fill",
                question: "Fill in the blank: Transformers are widely used for ____ generation.",
                correctAnswer: "text"
              },
              {
                type: "mcq",
                question: "What is the latent space in generative AI?",
                options: [
                  "Compressed data representation",
                  "A type of neural network",
                  "A storage database",
                  "A user interface"
                ],
                correctAnswer: "Compressed data representation"
              },
              {
                type: "mcq",
                question: "Which model uses a generator and discriminator?",
                options: ["GAN", "VAE", "Transformer", "RNN"],
                correctAnswer: "GAN"
              },
              {
                type: "fill",
                question: "Fill in the blank: VAEs stand for ____ Autoencoders.",
                correctAnswer: "Variational"
              },
              {
                type: "mcq",
                question: "What is a key characteristic of generative AI?",
                options: [
                  "Creates original outputs",
                  "Predicts classifications",
                  "Optimizes databases",
                  "Encrypts data"
                ],
                correctAnswer: "Creates original outputs"
              },
              {
                type: "mcq",
                question: "Which is NOT a generative AI application?",
                options: [
                  "Data sorting",
                  "Text generation",
                  "Image generation",
                  "Audio synthesis"
                ],
                correctAnswer: "Data sorting"
              },
              {
                type: "fill",
                question: "Fill in the blank: Generative AI relies on large ____ to learn patterns.",
                correctAnswer: "datasets"
              },
              {
                type: "mcq",
                question: "Which model is known for text generation?",
                options: ["Transformer", "GAN", "VAE", "CNN"],
                correctAnswer: "Transformer"
              }
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Generative Adversarial Networks (GANs)",
    description: "Learn how Generative Adversarial Networks work, their applications, and training challenges.",
    xp: 10,
    chapters: [
      {
        id: 2,
        title: "Generative Adversarial Networks (GANs)",
        isExpanded: false,
        lessons: [
          {
            id: 6,
            title: "Introduction to GANs",
            type: "text",
            content: `<p>Generative Adversarial Networks (GANs) consist of two models:</p>
<ul>
  <li><strong>Generator:</strong> Creates fake data.</li>
  <li><strong>Discriminator:</strong> Distinguishes real data from fake.</li>
</ul>
<p>The two models are trained together, improving each other.</p>
<p><strong>Example:</strong> A GAN generating realistic human faces from random noise.</p>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 7,
            title: "GAN Training Process",
            type: "text",
            content: `<p>GANs are trained in a competitive setting:</p>
<ol>
  <li>Generator creates fake data.</li>
  <li>Discriminator evaluates it against real data.</li>
  <li>Both models update based on errors.</li>
</ol>
<p><strong>Key points:</strong></p>
<ul>
  <li><strong>Adversarial loss</strong> guides training.</li>
  <li>Balance between models is crucial.</li>
</ul>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 8,
            title: "Applications of GANs",
            type: "text",
            content: `<p>GANs are used for:</p>
<ul>
  <li><strong>Image Generation:</strong> Creating art, faces, or objects.</li>
  <li><strong>Data Augmentation:</strong> Generating synthetic data.</li>
  <li><strong>Style Transfer:</strong> Applying artistic styles to images.</li>
</ul>
<p><strong>Example:</strong> CycleGAN transforms photos into paintings.</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 9,
            title: "Challenges with GANs",
            type: "text",
            content: `<p>Common challenges include:</p>
<ul>
  <li><strong>Mode Collapse:</strong> Generator produces limited outputs.</li>
  <li><strong>Training Instability:</strong> Hard to balance models.</li>
  <li><strong>Evaluation:</strong> Difficult to measure output quality.</li>
</ul>
<p>Solutions involve advanced architectures like WGAN or DCGAN.</p>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 10,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your understanding of GANs and their training process.</p>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [
              {
                type: "mcq",
                question: "What are the two components of a GAN?",
                options: [
                  "Generator and Discriminator",
                  "Encoder and Decoder",
                  "Input and Output",
                  "Trainer and Tester"
                ],
                correctAnswer: "Generator and Discriminator"
              },
              {
                type: "fill",
                question: "Fill in the blank: The ____ creates fake data in a GAN.",
                correctAnswer: "Generator"
              },
              {
                type: "mcq",
                question: "What does the discriminator do?",
                options: [
                  "Distinguishes real from fake",
                  "Generates new data",
                  "Trains the dataset",
                  "Encodes data"
                ],
                correctAnswer: "Distinguishes real from fake"
              },
              {
                type: "mcq",
                question: "What is a common GAN application?",
                options: [
                  "Image generation",
                  "Data encryption",
                  "Network optimization",
                  "File compression"
                ],
                correctAnswer: "Image generation"
              },
              {
                type: "fill",
                question: "Fill in the blank: ____ collapse is a GAN challenge where outputs lack variety.",
                correctAnswer: "Mode"
              },
              {
                type: "mcq",
                question: "What guides GAN training?",
                options: [
                  "Adversarial loss",
                  "Mean squared error",
                  "Cross-entropy",
                  "Gradient descent"
                ],
                correctAnswer: "Adversarial loss"
              },
              {
                type: "mcq",
                question: "What is a challenge in GAN training?",
                options: [
                  "Training instability",
                  "Overfitting",
                  "Underfitting",
                  "Data leakage"
                ],
                correctAnswer: "Training instability"
              },
              {
                type: "fill",
                question: "Fill in the blank: CycleGAN is used for ____ transfer.",
                correctAnswer: "style"
              },
              {
                type: "mcq",
                question: "Which is NOT a GAN challenge?",
                options: [
                  "Data encryption",
                  "Mode collapse",
                  "Training instability",
                  "Evaluation difficulty"
                ],
                correctAnswer: "Data encryption"
              },
              {
                type: "mcq",
                question: "What does a GAN generate from?",
                options: ["Random noise", "Real images", "Text prompts", "Structured data"],
                correctAnswer: "Random noise"
              },
              {
                type: "fill",
                question: "Fill in the blank: The ____ evaluates real versus fake data.",
                correctAnswer: "Discriminator"
              },
              {
                type: "mcq",
                question: "Which architecture improves GAN stability?",
                options: ["DCGAN", "SVM", "RNN", "K-Means"],
                correctAnswer: "DCGAN"
              }
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Variational Autoencoders (VAEs)",
    description: "Learn how Variational Autoencoders encode data and generate new content using probabilistic methods.",
    xp: 10,
    chapters: [
      {
        id: 3,
        title: "Variational Autoencoders (VAEs)",
        isExpanded: false,
        lessons: [
          {
            id: 11,
            title: "Introduction to VAEs",
            type: "text",
            content: `<p>Variational Autoencoders (VAEs) are generative models that encode data into a latent space and decode it to generate new data.</p>
<p><strong>Components:</strong></p>
<ul>
  <li><strong>Encoder:</strong> Maps data to latent space.</li>
  <li><strong>Decoder:</strong> Reconstructs data from latent space.</li>
</ul>
<p><strong>Example:</strong> Generating new handwritten digits similar to MNIST dataset.</p>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 12,
            title: "VAE Architecture",
            type: "text",
            content: `<p>VAEs work by:</p>
<ol>
  <li>Encoding input to a probability distribution.</li>
  <li>Sampling from the latent space.</li>
  <li>Decoding to reconstruct or generate data.</li>
</ol>
<p><strong>Key points:</strong></p>
<ul>
  <li>Uses probabilistic approach.</li>
  <li>Balances reconstruction and regularization.</li>
</ul>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 13,
            title: "Applications of VAEs",
            type: "text",
            content: `<p>VAEs are used for:</p>
<ul>
  <li><strong>Image Generation:</strong> Creating new images.</li>
  <li><strong>Data Denoising:</strong> Removing noise from images.</li>
  <li><strong>Anomaly Detection:</strong> Identifying unusual data points.</li>
</ul>
<p><strong>Example:</strong> VAEs reconstructing blurred images.</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 14,
            title: "VAE vs. GAN",
            type: "text",
            content: `<p>Comparing VAEs and GANs:</p>
<ul>
  <li><strong>VAEs:</strong> Probabilistic, smoother outputs, easier to train.</li>
  <li><strong>GANs:</strong> Sharper outputs, harder to train, risk of mode collapse.</li>
</ul>
<p><strong>Example:</strong> VAEs generate less sharp but more stable images than GANs.</p>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 15,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your knowledge of VAEs and how they compare to GANs.</p>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [
              {
                type: "mcq",
                question: "What does a VAE encode data into?",
                options: [
                  "Latent space",
                  "Output layer",
                  "Neural network",
                  "Database"
                ],
                correctAnswer: "Latent space"
              },
              {
                type: "fill",
                question: "Fill in the blank: The ____ maps data to a latent space in a VAE.",
                correctAnswer: "Encoder"
              },
              {
                type: "mcq",
                question: "What does the decoder do in a VAE?",
                options: [
                  "Reconstructs data",
                  "Classifies data",
                  "Encrypts data",
                  "Compresses data"
                ],
                correctAnswer: "Reconstructs data"
              },
              {
                type: "mcq",
                question: "What is a VAE application?",
                options: [
                  "Data denoising",
                  "Data sorting",
                  "Network security",
                  "File storage"
                ],
                correctAnswer: "Data denoising"
              },
              {
                type: "fill",
                question: "Fill in the blank: VAEs use a ____ approach for generation.",
                correctAnswer: "probabilistic"
              },
              {
                type: "mcq",
                question: "What is an advantage of VAEs over GANs?",
                options: [
                  "Easier to train",
                  "Sharper outputs",
                  "Faster training",
                  "More complex"
                ],
                correctAnswer: "Easier to train"
              },
              {
                type: "mcq",
                question: "What dataset is commonly used with VAEs?",
                options: ["MNIST", "CIFAR", "ImageNet", "All of the above"],
                correctAnswer: "All of the above"
              },
              {
                type: "fill",
                question: "Fill in the blank: VAEs balance reconstruction and ____.",
                correctAnswer: "regularization"
              },
              {
                type: "mcq",
                question: "What is a disadvantage of VAEs compared to GANs?",
                options: [
                  "Less sharp outputs",
                  "Harder to train",
                  "Mode collapse",
                  "Slower training"
                ],
                correctAnswer: "Less sharp outputs"
              },
              {
                type: "mcq",
                question: "What does a VAE sample from?",
                options: [
                  "Latent space",
                  "Input data",
                  "Output layer",
                  "Training set"
                ],
                correctAnswer: "Latent space"
              },
              {
                type: "fill",
                question: "Fill in the blank: VAEs are used for ____ detection.",
                correctAnswer: "anomaly"
              },
              {
                type: "mcq",
                question: "Which is NOT a VAE component?",
                options: [
                  "Discriminator",
                  "Encoder",
                  "Decoder",
                  "Latent space"
                ],
                correctAnswer: "Discriminator"
              }
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Transformers in Generative AI",
    description: "Learn how Transformers use attention mechanisms for text generation and other generative tasks.",
    xp: 10,
    chapters: [
      {
        id: 4,
        title: "Transformers in Generative AI",
        isExpanded: false,
        lessons: [
          {
            id: 16,
            title: "Introduction to Transformers",
            type: "text",
            content: `<p>Transformers are neural network architectures used for tasks like text generation.</p>
<p><strong>Key components:</strong></p>
<ul>
  <li><strong>Attention Mechanism:</strong> Focuses on relevant parts of input.</li>
  <li><strong>Encoder-Decoder:</strong> Processes input and generates output.</li>
</ul>
<p><strong>Example:</strong> GPT models generating human-like text.</p>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 17,
            title: "Attention Mechanism",
            type: "text",
            content: `<p>Attention allows transformers to weigh input parts differently.</p>
<p><strong>Types:</strong></p>
<ul>
  <li><strong>Self-Attention:</strong> Relates different parts of the input.</li>
  <li><strong>Multi-Head Attention:</strong> Captures multiple relationships.</li>
</ul>
<p><strong>Example:</strong> A transformer focusing on key words in a sentence for translation.</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 18,
            title: "Applications of Transformers",
            type: "text",
            content: `<p>Transformers are used for:</p>
<ul>
  <li><strong>Text Generation:</strong> Chatbots, story writing.</li>
  <li><strong>Translation:</strong> Language translation.</li>
  <li><strong>Summarization:</strong> Condensing text.</li>
</ul>
<p><strong>Example:</strong> BERT summarizing articles.</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 19,
            title: "Challenges with Transformers",
            type: "text",
            content: `<p>Challenges include:</p>
<ul>
  <li><strong>Computational Cost:</strong> Requires significant resources.</li>
  <li><strong>Data Requirements:</strong> Needs large datasets.</li>
  <li><strong>Bias:</strong> Can inherit biases from training data.</li>
</ul>
<p>Solutions involve efficient architectures like DistilBERT.</p>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 20,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your understanding of Transformers and their real-world use.</p>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [
              {
                type: "mcq",
                question: "What is a key component of transformers?",
                options: [
                  "Attention mechanism",
                  "Convolution layer",
                  "Pooling layer",
                  "Activation function"
                ],
                correctAnswer: "Attention mechanism"
              },
              {
                type: "fill",
                question: "Fill in the blank: Transformers use ____-attention to relate input parts.",
                correctAnswer: "self"
              },
              {
                type: "mcq",
                question: "What is a transformer application?",
                options: [
                  "Text generation",
                  "Data encryption",
                  "Image compression",
                  "Network security"
                ],
                correctAnswer: "Text generation"
              },
              {
                type: "mcq",
                question: "What model is known for text generation?",
                options: ["GPT", "VGG", "ResNet", "YOLO"],
                correctAnswer: "GPT"
              },
              {
                type: "fill",
                question: "Fill in the blank: Multi-head attention captures multiple ____.",
                correctAnswer: "relationships"
              },
              {
                type: "mcq",
                question: "What is a challenge with transformers?",
                options: [
                  "Computational cost",
                  "Mode collapse",
                  "Training instability",
                  "Overfitting"
                ],
                correctAnswer: "Computational cost"
              },
              {
                type: "mcq",
                question: "Which is NOT a transformer application?",
                options: [
                  "Data sorting",
                  "Translation",
                  "Summarization",
                  "Text generation"
                ],
                correctAnswer: "Data sorting"
              },
              {
                type: "fill",
                question: "Fill in the blank: Transformers require large ____ for training.",
                correctAnswer: "datasets"
              },
              {
                type: "mcq",
                question: "What model is used for summarization?",
                options: ["BERT", "GAN", "VAE", "DCGAN"],
                correctAnswer: "BERT"
              },
              {
                type: "mcq",
                question: "What can transformers inherit from data?",
                options: ["Bias", "Encryption", "Compression", "Sorting"],
                correctAnswer: "Bias"
              },
              {
                type: "fill",
                question: "Fill in the blank: ____ is an efficient transformer architecture.",
                correctAnswer: "DistilBERT"
              },
              {
                type: "mcq",
                question: "What does self-attention focus on?",
                options: [
                  "Input parts",
                  "Output layers",
                  "Training data",
                  "Loss functions"
                ],
                correctAnswer: "Input parts"
              }
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Ethics and Future of Generative AI",
    description: "Explore ethical concerns, bias, and future trends in generative AI development.",
    xp: 10,
    chapters: [
      {
        id: 5,
        title: "Ethics and Future of Generative AI",
        isExpanded: false,
        lessons: [
          {
            id: 21,
            title: "Ethical Considerations",
            type: "text",
            content: `<p>Generative AI raises ethical issues:</p>
<ul>
  <li><strong>Bias:</strong> Models can perpetuate biases in data.</li>
  <li><strong>Misuse:</strong> Creating deepfakes or misinformation.</li>
  <li><strong>Ownership:</strong> Who owns generated content?</li>
</ul>
<p><strong>Example:</strong> Ensuring fair representation in AI-generated content.</p>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 22,
            title: "Bias in Generative AI",
            type: "text",
            content: `<p>Bias can arise from:</p>
<ul>
  <li><strong>Training Data:</strong> Reflects historical biases.</li>
  <li><strong>Model Design:</strong> Amplifies certain patterns.</li>
</ul>
<p><strong>Mitigation:</strong></p>
<ul>
  <li>Diverse datasets</li>
  <li>Regular audits</li>
</ul>
<p><strong>Example:</strong> AI generating biased job descriptions.</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 23,
            title: "Future Trends",
            type: "text",
            content: `<p>Future of generative AI:</p>
<ul>
  <li><strong>Multimodal Models:</strong> Combining text, images, and audio.</li>
  <li><strong>Efficiency:</strong> Smaller, faster models.</li>
  <li><strong>Personalization:</strong> Tailored AI outputs.</li>
</ul>
<p><strong>Example:</strong> AI assistants generating personalized content.</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 24,
            title: "Responsible AI Development",
            type: "text",
            content: `<p>Principles for responsible AI:</p>
<ul>
  <li><strong>Transparency:</strong> Explain how models work.</li>
  <li><strong>Accountability:</strong> Monitor and correct errors.</li>
  <li><strong>Fairness:</strong> Ensure equitable outputs.</li>
</ul>
<p><strong>Example:</strong> Documenting AI decision-making processes.</p>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 25,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your understanding of ethics and the future of generative AI.</p>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [
              {
                type: "mcq",
                question: "What is an ethical issue in generative AI?",
                options: ["Bias", "Speed", "Memory", "Storage"],
                correctAnswer: "Bias"
              },
              {
                type: "fill",
                question: "Fill in the blank: Generative AI can create ____ like deepfakes.",
                correctAnswer: "misinformation"
              },
              {
                type: "mcq",
                question: "What can cause bias in AI?",
                options: [
                  "Training data",
                  "Network speed",
                  "Hardware",
                  "Encryption"
                ],
                correctAnswer: "Training data"
              },
              {
                type: "mcq",
                question: "What is a future trend in generative AI?",
                options: [
                  "Multimodal models",
                  "Data sorting",
                  "File compression",
                  "Network security"
                ],
                correctAnswer: "Multimodal models"
              },
              {
                type: "fill",
                question: "Fill in the blank: Responsible AI requires ____ to explain models.",
                correctAnswer: "transparency"
              },
              {
                type: "mcq",
                question: "How can bias be mitigated?",
                options: [
                  "Diverse datasets",
                  "Faster training",
                  "Smaller models",
                  "More layers"
                ],
                correctAnswer: "Diverse datasets"
              },
              {
                type: "mcq",
                question: "What is a misuse of generative AI?",
                options: [
                  "Creating deepfakes",
                  "Optimizing code",
                  "Sorting data",
                  "Encrypting files"
                ],
                correctAnswer: "Creating deepfakes"
              },
              {
                type: "fill",
                question: "Fill in the blank: AI should ensure ____ outputs.",
                correctAnswer: "fair"
              },
              {
                type: "mcq",
                question: "What is a principle of responsible AI?",
                options: [
                  "Accountability",
                  "Speed",
                  "Compression",
                  "Encryption"
                ],
                correctAnswer: "Accountability"
              },
              {
                type: "mcq",
                question: "What might generative AI personalize in the future?",
                options: ["Content", "Hardware", "Networks", "Storage"],
                correctAnswer: "Content"
              },
              {
                type: "fill",
                question: "Fill in the blank: Regular ____ help mitigate bias.",
                correctAnswer: "audits"
              },
              {
                type: "mcq",
                question: "What is a concern about generated content?",
                options: ["Ownership", "Speed", "Size", "Format"],
                correctAnswer: "Ownership"
              }
            ],
          },
        ],
      },
    ],
  },
];

const badges = [
  {
    id: 1,
    name: "HTML Novice",
    description: "Completed 1 lesson",
    xpRequired: 10,
    icon: "🎓"
  },
  {
    id: 2,
    name: "HTML Explorer",
    description: "Earned 50 XP",
    xpRequired: 50,
    icon: "🔍"
  },
  {
    id: 3,
    name: "HTML Champion",
    description: "Earned 100 XP",
    xpRequired: 100,
    icon: "🏆"
  }
];

// === COMPONENTS ===

// HomePage Component
function HomePage({
  onStartLesson,
  onGoToQuiz,
  lessons,
  completedLessons,
  xp,
  badgesEarned,
  badgesData,
  onRetakePreTest,
}) {
  const totalLessons = lessons.length;
  const completedCount = completedLessons.length;
  const progressPercent = (completedCount / totalLessons) * 100;

  const handleTakeRandomQuiz = () => {
    const randomLesson = lessons[Math.floor(Math.random() * lessons.length)];
    onGoToQuiz(randomLesson);
  };

  return (
    <main className="max-w-5xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
        🚀 GenAI Interactive Course
      </h2>
      <h1>"Generative AI is a transformative field of artificial intelligence focused on creating new content, from text and images to music and code. This course introduces you to the fundamentals of generative AI, covering key concepts, models, and applications. Learn how to leverage tools like GANs, VAEs, and transformers to build innovative AI solutions!"</h1>

      {/* XP and Progress */}
      <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl shadow-lg mb-8 border border-purple-100 mt-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-700 font-medium text-lg ">⭐ XP: {xp}</span>
          <span className="text-green-600 font-semibold">
            {completedCount} / {totalLessons} Lessons Completed
          </span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Badges */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">🏅 Badges Earned</h3>
        <div className="flex flex-wrap gap-4">
          {badgesEarned.length > 0 ? (
            badgesEarned.map((id, index) => {
              const badge = badgesData.find((b) => b.id === id);
              return (
                <div
                  key={index}
                  className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl w-40 text-center shadow-md hover:scale-105 transform transition"
                >
                  <div className="text-3xl mb-1">{badge.icon}</div>
                  <p className="font-bold text-yellow-800">{badge.name}</p>
                  <p className="text-xs text-gray-600 mt-1">{badge.description}</p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">No badges yet. Complete lessons to earn!</p>
          )}
        </div>
      </div>

      {/* Lessons */}
        <div className="space-y-6">
        {lessons.map((lesson) => {
          const currentIndex = lessons.findIndex((l) => l.id === lesson.id);
          const previousLessonId = currentIndex > 0 ? lessons[currentIndex - 1].id : null;
          const isLocked = previousLessonId !== null && !completedLessons.includes(previousLessonId);
          return (
            <div
              key={lesson.id}
              className={`p-6 rounded-xl shadow-lg border-l-8 transition ${
                completedLessons.includes(lesson.id)
                  ? "bg-green-50 border-green-500"
                  : "bg-white border-gray-200"
              } ${isLocked ? "opacity-70" : ""}`}
            >
              <h3 className="text-xl font-bold text-gray-800">{lesson.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
              {completedLessons.includes(lesson.id) && (
                <div className="flex items-center mt-2 text-green-600 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Completed
                </div>
              )}
              <button
                onClick={() => { if (!isLocked) onStartLesson(lesson.id); }}
                disabled={isLocked}
                className={`mt-4 px-5 py-2 text-white font-semibold rounded-full shadow transform transition ${
                  isLocked
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105"
                }`}
              >
                {isLocked ? "🔒 Locked" : "🚀 Take Quiz"}
              </button>
            </div>
          );
        })}
      </div>

      <div className="text-center space-y-4">
        <button
          onClick={handleTakeRandomQuiz}
          className="mt-10 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition"
        >
          🎲 Take Random Quiz
        </button>
        
        <div>
          <button
            onClick={onRetakePreTest}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition"
          >
            🧠 Retake PreTest
          </button>
        </div>
      </div>
    </main>
  );
}

// LessonPage Component
function LessonPage({ lesson, onBack, onGoToQuiz }) {
  const [expandedChapters, setExpandedChapters] = useState(
    new Set(lesson.chapters?.filter((ch) => ch.isExpanded).map((ch) => ch.id) || [])
  );
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Simulate completed lessons (in real app, get from context or localStorage)
  const [completedLessons, setCompletedLessons] = useState(new Set());

  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(chapterId)) {
        newSet.delete(chapterId);
      } else {
        newSet.add(chapterId);
      }
      return newSet;
    });
  };

  // Open modal if not locked
  const openLessonModal = (lessonItem) => {
    if (lessonItem.isLocked) return;
    setSelectedLesson(lessonItem);
    setShowModal(true);
  };

  // Mark lesson as complete and unlock next
  const markAsComplete = () => {
    if (!selectedLesson) return;

    // Mark current as complete
    setCompletedLessons((prev) => new Set(prev).add(selectedLesson.id));

    // Update lesson data: mark completed
    const chapter = lesson.chapters?.[0];
    const updatedLesson = chapter.lessons.find((l) => l.id === selectedLesson.id);
    if (updatedLesson) {
      updatedLesson.isCompleted = true;
    }

    // Unlock next lesson
    const lessonIndex = chapter.lessons.findIndex((l) => l.id === selectedLesson.id);
    if (lessonIndex !== -1 && lessonIndex < chapter.lessons.length - 1) {
      const nextLesson = chapter.lessons[lessonIndex + 1];
      nextLesson.isLocked = false;
    }

    // Close modal
    closeLessonModal();
  };

  const closeLessonModal = () => {
    setShowModal(false);
    setSelectedLesson(null);
  };

  // Get the only chapter (for simplicity)
  const chapter = lesson.chapters?.[0];

  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 bg-white rounded-3xl shadow-xl">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
        📘 {lesson.title}
      </h1>
      <p className="text-gray-800 text-lg mb-8">{lesson.description}</p>

      {lesson.chapters && lesson.chapters.length > 0 ? (
        <div className="space-y-6">
          {lesson.chapters.map((chapter) => (
            <div key={chapter.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div
                onClick={() => toggleChapter(chapter.id)}
                className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200 transition"
              >
                <h2 className="text-xl font-semibold text-gray-800">{chapter.title}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                    expandedChapters.has(chapter.id) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {expandedChapters.has(chapter.id) && (
                <div className="border-t border-gray-200">
                  {chapter.lessons.map((lessonItem) => (
                    <div
                      key={lessonItem.id}
                      onClick={() => openLessonModal(lessonItem)}
                      className={`border-b border-gray-100 last:border-b-0 cursor-pointer transition ${
                        lessonItem.isLocked
                          ? "opacity-60 hover:bg-white"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between items-center px-4 py-3">
                        <div>
                          <h3 className="text-lg font-medium text-gray-800">
                            {lessonItem.title}
                          </h3>
                          <p className="text-sm text-gray-500">{lessonItem.duration}</p>
                        </div>
                        <div>
                          {lessonItem.isCompleted ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white">✓</span>
                          ) : lessonItem.isLocked ? (
                            <span className="inline-flex items-center justify-center w-6 h-6">
                              🔒
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-gray-400">
                              ▶
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 italic mb-8">No content available yet. Please check back soon!</div>
      )}

      {/* Take Quiz Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => onGoToQuiz(lesson)}
          className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
        >
          🚀 Take Quiz
        </button>
      </div>

      {/* Back Button */}
      <div className="text-center mt-8">
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 font-medium underline transition"
        >
          ← Back to Home
        </button>
      </div>

      {/* Modal */}
      {showModal && selectedLesson && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closeLessonModal}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
              <h2 className="text-2xl font-bold text-white">{selectedLesson.title}</h2>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div
                className="text-gray-700 leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: selectedLesson.content }}
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 p-6 bg-gray-50 border-t border-gray-200">
              <button
                onClick={closeLessonModal}
                className="px-6 py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-xl transition"
              >
                Close
              </button>
              <button
                onClick={markAsComplete}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl shadow-md hover:scale-105 transition-transform"
              >
                Mark as Complete ✅
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
function DynamicQuizPage({ lesson, onBack, onComplete }) {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const generateQuizFromLesson = async () => {
      try {
        setLoading(true);
        setError("");
        console.log("Generating quiz for:", lesson.title);

        // Call the backend Gemini API to generate quiz questions
        console.log("Calling API endpoint:", "http://localhost:3000/api/quiz");
        console.log("Request payload:", { topic: lesson.title });
        
        // First check if backend is accessible
        try {
          const healthCheck = await axios.get("http://localhost:3000/");
          console.log("Backend health check:", healthCheck.data);
        } catch (healthError) {
          console.error("Backend health check failed:", healthError.message);
          throw new Error("Backend server is not accessible. Please make sure it's running on port 3000.");
        }
        
        // Test quiz route specifically
        try {
          const quizTest = await axios.get("http://localhost:3000/api/quiz/test");
          console.log("Quiz route test:", quizTest.data);
        } catch (quizTestError) {
          console.error("Quiz route test failed:", quizTestError.message);
          throw new Error("Quiz routes are not accessible. Please check backend configuration.");
        }
        
        try {
          const res = await axios.post("http://localhost:3000/api/quiz", {
            topic: lesson.title,
          });

          console.log("API Response:", res.data);

          if (!res.data || !res.data.questions || !Array.isArray(res.data.questions)) {
            throw new Error("Invalid response format from API");
          }

          if (res.data.questions.length === 0) {
            throw new Error("No questions returned from API");
          }

          // Format the questions from the API response
          const formatted = res.data.questions.map((q, index) => ({
            question: q.question || `Question ${index + 1}`,
            options: q.options || [],
            correctAnswer: q.answer || q.correctAnswer,
            type: "mcq", // All questions from Gemini API are MCQ
            xp: 10,
          }));

          console.log("Formatted questions:", formatted);
          setQuizQuestions(formatted);
          setLoading(false);
        } catch (apiError) {
          console.error("API Error Details:", {
            message: apiError.message,
            response: apiError.response?.data,
            status: apiError.response?.status,
            statusText: apiError.response?.statusText
          });
          
          if (apiError.code === 'ECONNREFUSED') {
            throw new Error("Cannot connect to backend server. Please make sure the server is running on port 3000.");
          } else if (apiError.response?.status === 500) {
            throw new Error(`Backend error: ${apiError.response.data?.error || 'Unknown server error'}`);
          } else if (apiError.response?.status === 400) {
            throw new Error(`Bad request: ${apiError.response.data?.error || 'Invalid request'}`);
          } else {
            throw new Error(`API call failed: ${apiError.message}`);
          }
        }
      } catch (err) {
        console.error("Quiz generation error:", err);
        setError(
          err.response?.data?.message ||
          err.message ||
          "Failed to generate quiz. Please try again."
        );
        setLoading(false);
      }
    };

    if (lesson && lesson.title) {
      generateQuizFromLesson();
    } else {
      setError("No lesson provided");
      setLoading(false);
    }
  }, [lesson]);



  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center p-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
          <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/20 rounded-full flex items-center justify-center animate-spin">
            <span className="text-purple-400 text-4xl">⚡</span>
          </div>
          <p className="text-white text-xl font-semibold mb-2">Generating your quiz...</p>
          <p className="text-white/70">This may take a few moments</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || quizQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="text-center p-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
            <span className="text-red-400 text-4xl">⚠️</span>
          </div>
          <h2 className="text-red-300 text-xl font-semibold mb-4">Quiz Generation Failed</h2>
          <p className="text-red-200/80 text-sm mb-6">{error || "No questions available for this lesson."}</p>
          <button
            onClick={onBack}
            className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl border border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm font-medium"
          >
            ← Back to Lesson
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (option) => {
    if (isCorrect !== null) return;
    setSelectedAnswer(option);
    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) setScore((prev) => prev + currentQuestion.xp);
  };



  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowFeedback(false);
    } else {
      onComplete(score);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto p-6 min-h-screen flex flex-col">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
            Quiz: {lesson.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <span>Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span>Score: {score} XP</span>
          </div>
        </div>

        <div className="mb-8">
          <div className="w-full bg-white/20 rounded-full h-3 backdrop-blur-sm">
            <div
              className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white/70 text-center mt-2 text-sm">{Math.round(progress)}% Complete</p>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Question
              </div>
              <h2 className="text-2xl font-semibold text-white leading-relaxed">
                {currentQuestion.question}
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedAnswer === option
                      ? isCorrect === true
                        ? "bg-green-500/30 border-2 border-green-400"
                        : isCorrect === false
                        ? "bg-red-500/30 border-2 border-red-400"
                        : "bg-blue-500/30 border-2 border-blue-400"
                      : "bg-white/10 hover:bg-white/20 border-2 border-white/20"
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                      selectedAnswer === option ? 'border-white' : 'border-white/40'
                    }`}>
                      {selectedAnswer === option && <div className="w-3 h-3 bg-white rounded-full"></div>}
                    </div>
                    <span className="text-white text-lg font-medium">{option}</span>
                  </div>
                </div>
              ))}
            </div>

            {showFeedback && isCorrect !== null && (
              <div className={`mb-8 p-6 rounded-2xl ${
                isCorrect ? "bg-green-500/20 border-2 border-green-400" : "bg-red-500/20 border-2 border-red-400"
              }`}>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    isCorrect ? "bg-green-500/30" : "bg-red-500/30"
                  }`}>
                    <span className="text-2xl">{isCorrect ? "🎉" : "💡"}</span>
                  </div>
                  <div>
                    {isCorrect ? (
                      <p className="text-green-300 font-semibold">Excellent! +{currentQuestion.xp} XP</p>
                    ) : (
                      <p className="text-red-300 font-semibold">Correct answer: <strong>{currentQuestion.correctAnswer}</strong></p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6 border-t border-white/20">
              <button
                onClick={onBack}
                className="text-white/80 hover:text-white transition"
              >
                ← Back
              </button>
              <button
                onClick={handleNext}
                disabled={isCorrect === null}
                className={`px-8 py-4 rounded-2xl font-semibold ${
                  isCorrect !== null
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-gray-600/50 text-white/50 cursor-not-allowed"
                }`}
              >
                {currentQuestionIndex < quizQuestions.length - 1 ? "Next" : "Finish"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// === MAIN APP ===
function GenAICourseApp() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentLesson, setCurrentLesson] = useState(null);
  const [xp, setXp] = useState(0);
  const [badgesEarned, setBadgesEarned] = useState([]);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [showPreTest, setShowPreTest] = useState(true);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("htmlCourseProgress");
    if (saved) {
      const { xp: savedXp, completedLessons: savedLessons } = JSON.parse(saved);
      setXp(savedXp);
      setCompletedLessons(savedLessons);
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem(
      "htmlCourseProgress",
      JSON.stringify({ xp, completedLessons })
    );

    const earned = badges.filter(
      (badge) => xp >= badge.xpRequired && !badgesEarned.includes(badge.id)
    );
    if (earned.length > 0) {
      setBadgesEarned((prev) => [...prev, ...earned.map((b) => b.id)]);
    }
  }, [xp, completedLessons]);

  const handleStartLesson = (id) => {
    const lesson = lessons.find((l) => l.id === id);
    setCurrentLesson(lesson);
    setCurrentPage("lesson");
  };

  const handleGoToQuiz = (lesson) => {
    setCurrentLesson(lesson);
    setCurrentPage("quiz");
  };

  const handleQuizComplete = (score) => {
    if (!completedLessons.includes(currentLesson.id)) {
      setXp((prev) => prev + currentLesson.xp);
      setCompletedLessons((prev) => [...prev, currentLesson.id]);
    }
    setCurrentPage("home");
  };

  const handlePreTestComplete = (level, finalScore) => {
    setShowPreTest(false);
    setCurrentPage("home");
    // You can use level and finalScore to customize the course experience
    console.log(`PreTest completed! Level: ${level}, Score: ${finalScore}`);
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-purple-50 to-pink-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-6 sm:p-8 transition-all duration-500 animate-fade-in">
                 {showPreTest && (
           <PreTest 
             courseName="GenAI" 
             onComplete={handlePreTestComplete} 
           />
         )}
        {!showPreTest && currentPage === "home" && (
          <HomePage
            onStartLesson={handleStartLesson}
            onGoToQuiz={handleGoToQuiz}
            lessons={lessons}
            completedLessons={completedLessons}
            xp={xp}
            badgesEarned={badgesEarned}
            badgesData={badges}
            onRetakePreTest={() => setShowPreTest(true)}
          />
        )}
        {!showPreTest && currentPage === "lesson" && (
          <LessonPage
            lesson={currentLesson}
            onBack={() => setCurrentPage("home")}
            onGoToQuiz={() => setCurrentPage("quiz")}
          />
        )}
        {!showPreTest && currentPage === "quiz" && (
          <DynamicQuizPage
            lesson={currentLesson}
            onBack={() => setCurrentPage("lesson")}
            onComplete={handleQuizComplete}
          />
        )}
      </div>
    </div>
  );
}

export default GenAICourseApp;