// Blog posts data - Easy to customize
const blogData = [
    {
        id: 1,
        title: "Getting Started with Machine Learning: A Beginner's Guide",
        excerpt: "Learn the fundamentals of machine learning, from data preprocessing to model evaluation, with practical examples and code snippets.",
        content: `# Getting Started with Machine Learning: A Beginner's Guide

Machine learning is transforming industries and creating new opportunities for data professionals. In this comprehensive guide, we'll explore the fundamentals of machine learning and how to get started.

## What is Machine Learning?

Machine learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every task.

## Key Concepts

### 1. Data Preprocessing
- Data cleaning and handling missing values
- Feature engineering and selection
- Data normalization and scaling

### 2. Model Training
- Choosing the right algorithm
- Training and validation sets
- Cross-validation techniques

### 3. Model Evaluation
- Performance metrics
- Overfitting and underfitting
- Model selection strategies

## Getting Started

1. Learn Python or R
2. Understand statistics and linear algebra
3. Practice with real datasets
4. Build projects and share them

## Conclusion

Machine learning is an exciting field with endless possibilities. Start with the basics, practice regularly, and don't be afraid to experiment!`,
        date: "2024-01-15",
        readTime: "8 min read",
        tags: ["Machine Learning", "Python", "Tutorial"],
        featured: true,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop"
    },
    {
        id: 2,
        title: "Data Visualization Best Practices",
        excerpt: "Discover the principles of effective data visualization and learn how to create compelling charts and graphs that tell a story.",
        content: `# Data Visualization Best Practices

Effective data visualization is crucial for communicating insights and making data-driven decisions. Here are the key principles to follow.

## Design Principles

### 1. Clarity
- Use clear, descriptive titles
- Choose appropriate chart types
- Avoid clutter and unnecessary elements

### 2. Color Usage
- Use color purposefully
- Ensure accessibility
- Maintain consistency

### 3. Data Integrity
- Represent data accurately
- Avoid misleading scales
- Include context and sources

## Chart Selection

Different chart types serve different purposes:
- Bar charts for comparisons
- Line charts for trends
- Scatter plots for relationships
- Heatmaps for patterns

## Tools and Libraries

Popular tools include:
- Python: Matplotlib, Seaborn, Plotly
- R: ggplot2, Shiny
- JavaScript: D3.js, Chart.js
- BI Tools: Tableau, Power BI

## Conclusion

Great visualizations tell a story and make complex data accessible to everyone.`,
        date: "2024-01-10",
        readTime: "6 min read",
        tags: ["Data Visualization", "Design", "Best Practices"],
        featured: true,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    },
    {
        id: 3,
        title: "Building Your First Data Science Portfolio",
        excerpt: "Learn how to create a compelling data science portfolio that showcases your skills and attracts potential employers.",
        content: `# Building Your First Data Science Portfolio

A strong portfolio is essential for landing your first data science job. Here's how to build one that stands out.

## Portfolio Structure

### 1. About Section
- Your background and interests
- Skills and expertise
- Career goals

### 2. Projects
- 3-5 high-quality projects
- Clear problem statements
- Code and documentation
- Results and insights

### 3. Blog/Articles
- Share your learning journey
- Write about interesting findings
- Demonstrate communication skills

## Project Selection

Choose projects that:
- Solve real problems
- Showcase different skills
- Include clean, documented code
- Have clear visualizations

## Documentation

Good documentation includes:
- Problem statement
- Data description
- Methodology
- Results and insights
- Future improvements

## Conclusion

A well-crafted portfolio demonstrates your skills and passion for data science.`,
        date: "2024-01-05",
        readTime: "7 min read",
        tags: ["Portfolio", "Career", "Data Science"],
        featured: true,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    },
    {
        id: 4,
        title: "Understanding Deep Learning Fundamentals",
        excerpt: "Dive into the world of deep learning and neural networks with this comprehensive introduction to the field.",
        content: `# Understanding Deep Learning Fundamentals

Deep learning has revolutionized artificial intelligence and is now being applied across various industries.

## What is Deep Learning?

Deep learning is a subset of machine learning that uses neural networks with multiple layers to model and understand complex patterns in data.

## Key Concepts

### Neural Networks
- Perceptrons and activation functions
- Backpropagation
- Gradient descent

### Popular Architectures
- Convolutional Neural Networks (CNNs)
- Recurrent Neural Networks (RNNs)
- Transformers

## Applications

- Computer vision
- Natural language processing
- Speech recognition
- Recommendation systems

## Getting Started

1. Learn the basics of machine learning
2. Understand linear algebra and calculus
3. Practice with frameworks like TensorFlow or PyTorch
4. Work on real projects

## Conclusion

Deep learning opens up exciting possibilities for solving complex problems.`,
        date: "2024-01-01",
        readTime: "10 min read",
        tags: ["Deep Learning", "Neural Networks", "AI"],
        featured: false,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop"
    }
];

// Export for use in components
window.blogData = blogData;
