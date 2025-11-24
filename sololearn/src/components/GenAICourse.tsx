import React from "react";
import CoursePlayer from "./me"; // Adjust path as needed

type QuestionType = "mcq" | "fill";

interface QuizQuestion {
  type: QuestionType;
  question: string;
  options?: string[]; // Optional for fill-in-the-blank
  correctAnswer: string;
}

interface Lesson {
  id: number;
  title: string;
  type: "text";
  content: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  quiz: QuizQuestion[];
}

interface Chapter {
  id: number;
  title: string;
  isExpanded: boolean;
  lessons: Lesson[];
}

interface CourseData {
  title: string;
  description: string;
  icon: React.ReactNode;
  chapters: Chapter[];
}

// Define icon as a separate component
const AIIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 128 128">
    <circle cx="64" cy="64" r="60" fill="#1E88E5" />
    <path
      fill="#FFFFFF"
      d="M64 20c-24.3 0-44 19.7-44 44s19.7 44 44 44 44-19.7 44-44-19.7-44-44-44zm0 80c-19.8 0-36-16.2-36-36s16.2-36 36-36 36 16.2 36 36-16.2 36-36 36z"
    />
    <path
      fill="#FFD700"
      d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm0 48c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"
    />
    <circle cx="64" cy="64" r="12" fill="#FFFFFF" />
  </svg>
);

const GenAICourseData: CourseData = {
  title: "Generative AI Interactive Course",
  description:
    "Generative AI is a transformative field of artificial intelligence focused on creating new content, from text and images to music and code. This course introduces you to the fundamentals of generative AI, covering key concepts, models, and applications. Learn how to leverage tools like GANs, VAEs, and transformers to build innovative AI solutions!",
  icon: <AIIcon />,
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
          content: `Generative AI refers to algorithms that can generate new content, such as text, images, or audio, based on patterns learned from data.

Key characteristics:
- Creates original outputs
- Uses models like GANs and transformers
- Applications in art, writing, and more

Example application:
Generating realistic images from text descriptions.
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [],
        },
        {
          id: 2,
          title: "Key Concepts",
          type: "text",
          content: `Core concepts in generative AI:

- **Training Data**: Large datasets used to train models.
- **Latent Space**: A compressed representation of data.
- **Loss Functions**: Metrics to optimize model performance.

Example:
A text generator learns patterns from thousands of books to produce coherent stories.
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: false,
          quiz: [],
        },
        {
          id: 3,
          title: "Types of Generative Models",
          type: "text",
          content: `Common generative models include:

- **GANs (Generative Adversarial Networks)**: Two networks (generator and discriminator) compete to create realistic outputs.
- **VAEs (Variational Autoencoders)**: Encode and decode data for generation.
- **Transformers**: Used in text generation (e.g., GPT models).

Example:
GANs generating photorealistic faces.
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [],
        },
        {
          id: 4,
          title: "Applications of Generative AI",
          type: "text",
          content: `Generative AI is used in:

- **Text Generation**: Chatbots, story writing
- **Image Generation**: Art, photo editing
- **Audio Generation**: Music, voice synthesis
- **Code Generation**: Automating programming tasks

Example:
Tools like DALL·E create images from text prompts.
`,
          duration: "8 min",
          isCompleted: false,
          isLocked: false,
          quiz: [],
        },
        {
          id: 5,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              type: "mcq",
              question: "What does generative AI create?",
              options: ["New content", "Databases", "Hardware", "Websites"],
              correctAnswer: "New content",
            },
            {
              type: "fill",
              question: "Fill in the blank: GAN stands for ____ Adversarial Network.",
              correctAnswer: "Generative",
            },
            {
              type: "mcq",
              question: "Which is a type of generative model?",
              options: ["GAN", "SVM", "K-Means", "Decision Tree"],
              correctAnswer: "GAN",
            },
            {
              type: "mcq",
              question: "What is a common application of generative AI?",
              options: [
                "Image generation",
                "Network security",
                "Data sorting",
                "File compression",
              ],
              correctAnswer: "Image generation",
            },
            {
              type: "fill",
              question: "Fill in the blank: Transformers are widely used for ____ generation.",
              correctAnswer: "text",
            },
            {
              type: "mcq",
              question: "What is the latent space in generative AI?",
              options: [
                "Compressed data representation",
                "A type of neural network",
                "A storage database",
                "A user interface",
              ],
              correctAnswer: "Compressed data representation",
            },
            {
              type: "mcq",
              question: "Which model uses a generator and discriminator?",
              options: ["GAN", "VAE", "Transformer", "RNN"],
              correctAnswer: "GAN",
            },
            {
              type: "fill",
              question: "Fill in the blank: VAEs stand for ____ Autoencoders.",
              correctAnswer: "Variational",
            },
            {
              type: "mcq",
              question: "What is a key characteristic of generative AI?",
              options: [
                "Creates original outputs",
                "Predicts classifications",
                "Optimizes databases",
                "Encrypts data",
              ],
              correctAnswer: "Creates original outputs",
            },
            {
              type: "mcq",
              question: "Which is NOT a generative AI application?",
              options: [
                "Data sorting",
                "Text generation",
                "Image generation",
                "Audio synthesis",
              ],
              correctAnswer: "Data sorting",
            },
            {
              type: "fill",
              question: "Fill in the blank: Generative AI relies on large ____ to learn patterns.",
              correctAnswer: "datasets",
            },
            {
              type: "mcq",
              question: "Which model is known for text generation?",
              options: ["Transformer", "GAN", "VAE", "CNN"],
              correctAnswer: "Transformer",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Generative Adversarial Networks (GANs)",
      isExpanded: false,
      lessons: [
        {
          id: 6,
          title: "Introduction to GANs",
          type: "text",
          content: `Generative Adversarial Networks (GANs) consist of two models:

- **Generator**: Creates fake data.
- **Discriminator**: Distinguishes real data from fake.

The two models are trained together, improving each other.

Example:
A GAN generating realistic human faces from random noise.
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 7,
          title: "GAN Training Process",
          type: "text",
          content: `GANs are trained in a competitive setting:

1. Generator creates fake data.
2. Discriminator evaluates it against real data.
3. Both models update based on errors.

Key points:
- Adversarial loss guides training.
- Balance between models is crucial.
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 8,
          title: "Applications of GANs",
          type: "text",
          content: `GANs are used for:

- **Image Generation**: Creating art, faces, or objects.
- **Data Augmentation**: Generating synthetic data.
- **Style Transfer**: Applying artistic styles to images.

Example:
CycleGAN transforms photos into paintings.
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 9,
          title: "Challenges with GANs",
          type: "text",
          content: `Common challenges include:

- **Mode Collapse**: Generator produces limited outputs.
- **Training Instability**: Hard to balance models.
- **Evaluation**: Difficult to measure output quality.

Solutions involve advanced architectures like WGAN or DCGAN.
`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 10,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
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
                "Trainer and Tester",
              ],
              correctAnswer: "Generator and Discriminator",
            },
            {
              type: "fill",
              question: "Fill in the blank: The ____ creates fake data in a GAN.",
              correctAnswer: "Generator",
            },
            {
              type: "mcq",
              question: "What does the discriminator do?",
              options: [
                "Distinguishes real from fake",
                "Generates new data",
                "Trains the dataset",
                "Encodes data",
              ],
              correctAnswer: "Distinguishes real from fake",
            },
            {
              type: "mcq",
              question: "What is a common GAN application?",
              options: [
                "Image generation",
                "Data encryption",
                "Network optimization",
                "File compression",
              ],
              correctAnswer: "Image generation",
            },
            {
              type: "fill",
              question: "Fill in the blank: ____ collapse is a GAN challenge where outputs lack variety.",
              correctAnswer: "Mode",
            },
            {
              type: "mcq",
              question: "What guides GAN training?",
              options: [
                "Adversarial loss",
                "Mean squared error",
                "Cross-entropy",
                "Gradient descent",
              ],
              correctAnswer: "Adversarial loss",
            },
            {
              type: "mcq",
              question: "What is a challenge in GAN training?",
              options: [
                "Training instability",
                "Overfitting",
                "Underfitting",
                "Data leakage",
              ],
              correctAnswer: "Training instability",
            },
            {
              type: "fill",
              question: "Fill in the blank: CycleGAN is used for ____ transfer.",
              correctAnswer: "style",
            },
            {
              type: "mcq",
              question: "Which is NOT a GAN challenge?",
              options: [
                "Data encryption",
                "Mode collapse",
                "Training instability",
                "Evaluation difficulty",
              ],
              correctAnswer: "Data encryption",
            },
            {
              type: "mcq",
              question: "What does a GAN generate from?",
              options: ["Random noise", "Real images", "Text prompts", "Structured data"],
              correctAnswer: "Random noise",
            },
            {
              type: "fill",
              question: "Fill in the blank: The ____ evaluates real versus fake data.",
              correctAnswer: "Discriminator",
            },
            {
              type: "mcq",
              question: "Which architecture improves GAN stability?",
              options: ["DCGAN", "SVM", "RNN", "K-Means"],
              correctAnswer: "DCGAN",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Variational Autoencoders (VAEs)",
      isExpanded: false,
      lessons: [
        {
          id: 11,
          title: "Introduction to VAEs",
          type: "text",
          content: `Variational Autoencoders (VAEs) are generative models that encode data into a latent space and decode it to generate new data.

Components:
- **Encoder**: Maps data to latent space.
- **Decoder**: Reconstructs data from latent space.

Example:
Generating new handwritten digits similar to MNIST dataset.
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 12,
          title: "VAE Architecture",
          type: "text",
          content: `VAEs work by:

1. Encoding input to a probability distribution.
2. Sampling from the latent space.
3. Decoding to reconstruct or generate data.

Key points:
- Uses probabilistic approach.
- Balances reconstruction and regularization.
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 13,
          title: "Applications of VAEs",
          type: "text",
          content: `VAEs are used for:

- **Image Generation**: Creating new images.
- **Data Denoising**: Removing noise from images.
- **Anomaly Detection**: Identifying unusual data points.

Example:
VAEs reconstructing blurred images.
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 14,
          title: "VAE vs. GAN",
          type: "text",
          content: `Comparing VAEs and GANs:

- **VAEs**: Probabilistic, smoother outputs, easier to train.
- **GANs**: Sharper outputs, harder to train, risk of mode collapse.

Example:
VAEs generate less sharp but more stable images than GANs.
`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 15,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
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
                "Database",
              ],
              correctAnswer: "Latent space",
            },
            {
              type: "fill",
              question: "Fill in the blank: The ____ maps data to a latent space in a VAE.",
              correctAnswer: "Encoder",
            },
            {
              type: "mcq",
              question: "What does the decoder do in a VAE?",
              options: [
                "Reconstructs data",
                "Classifies data",
                "Encrypts data",
                "Compresses data",
              ],
              correctAnswer: "Reconstructs data",
            },
            {
              type: "mcq",
              question: "What is a VAE application?",
              options: [
                "Data denoising",
                "Data sorting",
                "Network security",
                "File storage",
              ],
              correctAnswer: "Data denoising",
            },
            {
              type: "fill",
              question: "Fill in the blank: VAEs use a ____ approach for generation.",
              correctAnswer: "probabilistic",
            },
            {
              type: "mcq",
              question: "What is an advantage of VAEs over GANs?",
              options: [
                "Easier to train",
                "Sharper outputs",
                "Faster training",
                "More complex",
              ],
              correctAnswer: "Easier to train",
            },
            {
              type: "mcq",
              question: "What dataset is commonly used with VAEs?",
              options: ["MNIST", "CIFAR", "ImageNet", "All of the above"],
              correctAnswer: "All of the above",
            },
            {
              type: "fill",
              question: "Fill in the blank: VAEs balance reconstruction and ____.",
              correctAnswer: "regularization",
            },
            {
              type: "mcq",
              question: "What is a disadvantage of VAEs compared to GANs?",
              options: [
                "Less sharp outputs",
                "Harder to train",
                "Mode collapse",
                "Slower training",
              ],
              correctAnswer: "Less sharp outputs",
            },
            {
              type: "mcq",
              question: "What does a VAE sample from?",
              options: [
                "Latent space",
                "Input data",
                "Output layer",
                "Training set",
              ],
              correctAnswer: "Latent space",
            },
            {
              type: "fill",
              question: "Fill in the blank: VAEs are used for ____ detection.",
              correctAnswer: "anomaly",
            },
            {
              type: "mcq",
              question: "Which is NOT a VAE component?",
              options: [
                "Discriminator",
                "Encoder",
                "Decoder",
                "Latent space",
              ],
              correctAnswer: "Discriminator",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Transformers in Generative AI",
      isExpanded: false,
      lessons: [
        {
          id: 16,
          title: "Introduction to Transformers",
          type: "text",
          content: `Transformers are neural network architectures used for tasks like text generation.

Key components:
- **Attention Mechanism**: Focuses on relevant parts of input.
- **Encoder-Decoder**: Processes input and generates output.

Example:
GPT models generating human-like text.
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 17,
          title: "Attention Mechanism",
          type: "text",
          content: `Attention allows transformers to weigh input parts differently.

Types:
- **Self-Attention**: Relates different parts of the input.
- **Multi-Head Attention**: Captures multiple relationships.

Example:
A transformer focusing on key words in a sentence for translation.
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 18,
          title: "Applications of Transformers",
          type: "text",
          content: `Transformers are used for:

- **Text Generation**: Chatbots, story writing.
- **Translation**: Language translation.
- **Summarization**: Condensing text.

Example:
BERT summarizing articles.
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 19,
          title: "Challenges with Transformers",
          type: "text",
          content: `Challenges include:

- **Computational Cost**: Requires significant resources.
- **Data Requirements**: Needs large datasets.
- **Bias**: Can inherit biases from training data.

Solutions involve efficient architectures like DistilBERT.
`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 20,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
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
                "Activation function",
              ],
              correctAnswer: "Attention mechanism",
            },
            {
              type: "fill",
              question: "Fill in the blank: Transformers use ____-attention to relate input parts.",
              correctAnswer: "self",
            },
            {
              type: "mcq",
              question: "What is a transformer application?",
              options: [
                "Text generation",
                "Data encryption",
                "Image compression",
                "Network security",
              ],
              correctAnswer: "Text generation",
            },
            {
              type: "mcq",
              question: "What model is known for text generation?",
              options: ["GPT", "VGG", "ResNet", "YOLO"],
              correctAnswer: "GPT",
            },
            {
              type: "fill",
              question: "Fill in the blank: Multi-head attention captures multiple ____.",
              correctAnswer: "relationships",
            },
            {
              type: "mcq",
              question: "What is a challenge with transformers?",
              options: [
                "Computational cost",
                "Mode collapse",
                "Training instability",
                "Overfitting",
              ],
              correctAnswer: "Computational cost",
            },
            {
              type: "mcq",
              question: "Which is NOT a transformer application?",
              options: [
                "Data sorting",
                "Translation",
                "Summarization",
                "Text generation",
              ],
              correctAnswer: "Data sorting",
            },
            {
              type: "fill",
              question: "Fill in the blank: Transformers require large ____ for training.",
              correctAnswer: "datasets",
            },
            {
              type: "mcq",
              question: "What model is used for summarization?",
              options: ["BERT", "GAN", "VAE", "DCGAN"],
              correctAnswer: "BERT",
            },
            {
              type: "mcq",
              question: "What can transformers inherit from data?",
              options: ["Bias", "Encryption", "Compression", "Sorting"],
              correctAnswer: "Bias",
            },
            {
              type: "fill",
              question: "Fill in the blank: ____ is an efficient transformer architecture.",
              correctAnswer: "DistilBERT",
            },
            {
              type: "mcq",
              question: "What does self-attention focus on?",
              options: [
                "Input parts",
                "Output layers",
                "Training data",
                "Loss functions",
              ],
              correctAnswer: "Input parts",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Ethics and Future of Generative AI",
      isExpanded: false,
      lessons: [
        {
          id: 21,
          title: "Ethical Considerations",
          type: "text",
          content: `Generative AI raises ethical issues:

- **Bias**: Models can perpetuate biases in data.
- **Misuse**: Creating deepfakes or misinformation.
- **Ownership**: Who owns generated content?

Example:
Ensuring fair representation in AI-generated content.
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 22,
          title: "Bias in Generative AI",
          type: "text",
          content: `Bias can arise from:

- **Training Data**: Reflects historical biases.
- **Model Design**: Amplifies certain patterns.

Mitigation:
- Diverse datasets
- Regular audits

Example:
AI generating biased job descriptions.
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 23,
          title: "Future Trends",
          type: "text",
          content: `Future of generative AI:

- **Multimodal Models**: Combining text, images, and audio.
- **Efficiency**: Smaller, faster models.
- **Personalization**: Tailored AI outputs.

Example:
AI assistants generating personalized content.
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 24,
          title: "Responsible AI Development",
          type: "text",
          content: `Principles for responsible AI:

- **Transparency**: Explain how models work.
- **Accountability**: Monitor and correct errors.
- **Fairness**: Ensure equitable outputs.

Example:
Documenting AI decision-making processes.
`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 25,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "What is an ethical issue in generative AI?",
              options: ["Bias", "Speed", "Memory", "Storage"],
              correctAnswer: "Bias",
            },
            {
              type: "fill",
              question: "Fill in the blank: Generative AI can create ____ like deepfakes.",
              correctAnswer: "misinformation",
            },
            {
              type: "mcq",
              question: "What can cause bias in AI?",
              options: [
                "Training data",
                "Network speed",
                "Hardware",
                "Encryption",
              ],
              correctAnswer: "Training data",
            },
            {
              type: "mcq",
              question: "What is a future trend in generative AI?",
              options: [
                "Multimodal models",
                "Data sorting",
                "File compression",
                "Network security",
              ],
              correctAnswer: "Multimodal models",
            },
            {
              type: "fill",
              question: "Fill in the blank: Responsible AI requires ____ to explain models.",
              correctAnswer: "transparency",
            },
            {
              type: "mcq",
              question: "How can bias be mitigated?",
              options: [
                "Diverse datasets",
                "Faster training",
                "Smaller models",
                "More layers",
              ],
              correctAnswer: "Diverse datasets",
            },
            {
              type: "mcq",
              question: "What is a misuse of generative AI?",
              options: [
                "Creating deepfakes",
                "Optimizing code",
                "Sorting data",
                "Encrypting files",
              ],
              correctAnswer: "Creating deepfakes",
            },
            {
              type: "fill",
              question: "Fill in the blank: AI should ensure ____ outputs.",
              correctAnswer: "fair",
            },
            {
              type: "mcq",
              question: "What is a principle of responsible AI?",
              options: [
                "Accountability",
                "Speed",
                "Compression",
                "Encryption",
              ],
              correctAnswer: "Accountability",
            },
            {
              type: "mcq",
              question: "What might generative AI personalize in the future?",
              options: ["Content", "Hardware", "Networks", "Storage"],
              correctAnswer: "Content",
            },
            {
              type: "fill",
              question: "Fill in the blank: Regular ____ help mitigate bias.",
              correctAnswer: "audits",
            },
            {
              type: "mcq",
              question: "What is a concern about generated content?",
              options: ["Ownership", "Speed", "Size", "Format"],
              correctAnswer: "Ownership",
            },
          ],
        },
      ],
    },
  ],
};

export default function GenAICourse() {
  return <CoursePlayer courseId="generative-ai" courseData={GenAICourseData} />;
}