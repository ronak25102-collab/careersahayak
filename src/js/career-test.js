// Career Test System - Complete with 15 Questions
console.log('Career Test module loaded - 15 Questions Version');

const CareerTest = {
    currentQuestion: 0,
    answers: [],
    questions: [
        {
            id: 1,
            question: "What type of work environment do you prefer?",
            options: [
                { text: "Working with technology and computers", categories: ["Technology", "Engineering"] },
                { text: "Helping and caring for people", categories: ["Healthcare", "Education"] },
                { text: "Creative and artistic expression", categories: ["Creative Arts", "Marketing"] },
                { text: "Business and management", categories: ["Business", "Finance"] }
            ]
        },
        {
            id: 2,
            question: "What are your strongest skills?",
            options: [
                { text: "Problem-solving and analytical thinking", categories: ["Technology", "Engineering", "Science"] },
                { text: "Communication and interpersonal skills", categories: ["Healthcare", "Education", "Marketing"] },
                { text: "Creativity and design", categories: ["Creative Arts", "Marketing"] },
                { text: "Leadership and organization", categories: ["Business", "Management"] }
            ]
        },
        {
            id: 3,
            question: "What motivates you most in a career?",
            options: [
                { text: "Innovation and creating new solutions", categories: ["Technology", "Engineering"] },
                { text: "Making a positive impact on people's lives", categories: ["Healthcare", "Education"] },
                { text: "Self-expression and artistic freedom", categories: ["Creative Arts"] },
                { text: "Financial success and career growth", categories: ["Business", "Finance"] }
            ]
        },
        {
            id: 4,
            question: "How do you prefer to work?",
            options: [
                { text: "Independently with minimal supervision", categories: ["Technology", "Creative Arts"] },
                { text: "In teams collaborating with others", categories: ["Business", "Healthcare"] },
                { text: "Leading and managing others", categories: ["Business", "Management"] },
                { text: "Following structured processes", categories: ["Engineering", "Finance"] }
            ]
        },
        {
            id: 5,
            question: "What subjects did you enjoy most in school?",
            options: [
                { text: "Mathematics and Science", categories: ["Technology", "Engineering", "Science"] },
                { text: "Languages and Literature", categories: ["Education", "Marketing", "Creative Arts"] },
                { text: "Arts and Design", categories: ["Creative Arts"] },
                { text: "Business and Economics", categories: ["Business", "Finance"] }
            ]
        },
        {
            id: 6,
            question: "Which activity sounds most appealing to you?",
            options: [
                { text: "Building or coding something from scratch", categories: ["Technology", "Engineering"] },
                { text: "Teaching or mentoring others", categories: ["Education", "Healthcare"] },
                { text: "Designing visual content or campaigns", categories: ["Creative Arts", "Marketing"] },
                { text: "Analyzing data and making strategic decisions", categories: ["Business", "Finance"] }
            ]
        },
        {
            id: 7,
            question: "What kind of work schedule appeals to you?",
            options: [
                { text: "Flexible hours with remote work options", categories: ["Technology", "Creative Arts"] },
                { text: "Regular 9-5 with predictable routine", categories: ["Business", "Finance"] },
                { text: "Varied schedule with face-to-face interactions", categories: ["Healthcare", "Education"] },
                { text: "Project-based with intense deadlines", categories: ["Marketing", "Engineering"] }
            ]
        },
        {
            id: 8,
            question: "How do you handle challenges?",
            options: [
                { text: "Research and find technical solutions", categories: ["Technology", "Engineering", "Science"] },
                { text: "Seek input and collaborate with others", categories: ["Business", "Healthcare"] },
                { text: "Think outside the box creatively", categories: ["Creative Arts", "Marketing"] },
                { text: "Analyze systematically and plan methodically", categories: ["Finance", "Management"] }
            ]
        },
        {
            id: 9,
            question: "What type of impact do you want to make?",
            options: [
                { text: "Advance technology and innovation", categories: ["Technology", "Engineering"] },
                { text: "Improve people's health and wellbeing", categories: ["Healthcare", "Education"] },
                { text: "Influence culture and inspire creativity", categories: ["Creative Arts", "Marketing"] },
                { text: "Drive economic growth and business success", categories: ["Business", "Finance"] }
            ]
        },
        {
            id: 10,
            question: "Which work setting suits you best?",
            options: [
                { text: "Tech startup or innovation lab", categories: ["Technology", "Engineering"] },
                { text: "Hospital, clinic, or school", categories: ["Healthcare", "Education"] },
                { text: "Creative studio or agency", categories: ["Creative Arts", "Marketing"] },
                { text: "Corporate office or consulting firm", categories: ["Business", "Finance"] }
            ]
        },
        {
            id: 11,
            question: "What's your approach to learning new skills?",
            options: [
                { text: "Self-taught through online resources and experimentation", categories: ["Technology", "Creative Arts"] },
                { text: "Formal education and certification programs", categories: ["Healthcare", "Finance"] },
                { text: "Hands-on practice and mentorship", categories: ["Engineering", "Education"] },
                { text: "Workshops, networking, and real-world experience", categories: ["Business", "Marketing"] }
            ]
        },
        {
            id: 12,
            question: "Which achievement would make you most proud?",
            options: [
                { text: "Developing a successful app or product", categories: ["Technology", "Engineering"] },
                { text: "Helping someone overcome a significant challenge", categories: ["Healthcare", "Education"] },
                { text: "Creating award-winning creative work", categories: ["Creative Arts", "Marketing"] },
                { text: "Leading a company to profitability", categories: ["Business", "Finance"] }
            ]
        },
        {
            id: 13,
            question: "How do you measure success?",
            options: [
                { text: "Technical excellence and innovation", categories: ["Technology", "Engineering", "Science"] },
                { text: "Positive impact on individuals or community", categories: ["Healthcare", "Education"] },
                { text: "Recognition and creative influence", categories: ["Creative Arts", "Marketing"] },
                { text: "Financial rewards and professional advancement", categories: ["Business", "Finance"] }
            ]
        },
        {
            id: 14,
            question: "What kind of tasks energize you?",
            options: [
                { text: "Solving complex technical problems", categories: ["Technology", "Engineering"] },
                { text: "Interacting with and helping people", categories: ["Healthcare", "Education"] },
                { text: "Brainstorming and creating new concepts", categories: ["Creative Arts", "Marketing"] },
                { text: "Planning strategies and analyzing outcomes", categories: ["Business", "Finance"] }
            ]
        },
        {
            id: 15,
            question: "Where do you see yourself in 10 years?",
            options: [
                { text: "Leading technical innovation in my field", categories: ["Technology", "Engineering"] },
                { text: "Making a lasting difference in people's lives", categories: ["Healthcare", "Education"] },
                { text: "Running my own creative business or agency", categories: ["Creative Arts", "Marketing"] },
                { text: "Executive leadership in a major organization", categories: ["Business", "Finance", "Management"] }
            ]
        }
    ],

    init() {
        this.currentQuestion = 0;
        this.answers = [];
        const container = document.getElementById('career-test-container');
        if (container) container.innerHTML = '';
    },

    startTest() {
        this.currentQuestion = 0;
        this.answers = [];
        this.renderQuestion();
    },

    renderQuestion() {
        const container = document.getElementById('career-test-container');
        if (!container) {
            console.error('Career test container not found');
            return;
        }

        const question = this.questions[this.currentQuestion];
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;

        // Add extra top padding to prevent header overlap
        container.innerHTML = `
            <div style="height: 20px;"></div>
            <section style="max-width: 800px; margin: 0 auto; padding: 0 2rem;">
                <div style="margin-bottom: 2rem;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span style="color: #6b7280; font-weight: 600;">Question ${this.currentQuestion + 1} of ${this.questions.length}</span>
                        <span style="color: #2563eb; font-weight: 700;">${Math.round(progress)}%</span>
                    </div>
                    <div style="height: 10px; background: #e5e7eb; border-radius: 8px; overflow: hidden;">
                        <div style="height: 100%; background: linear-gradient(90deg, #2563eb, #8b5cf6); width: ${progress}%; transition: width 0.3s;"></div>
                    </div>
                </div>

                <div style="background: white; padding: 3rem; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
                    <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #111827;">${question.question}</h2>
                    
                    <div style="display: grid; gap: 1rem;">
                        ${question.options.map((option, index) => `
                            <button 
                                onclick="CareerTest.selectAnswer(${index})"
                                style="
                                    padding: 1.5rem;
                                    text-align: left;
                                    background: #f9fafb;
                                    border: 2px solid #e5e7eb;
                                    border-radius: 12px;
                                    cursor: pointer;
                                    transition: all 0.2s;
                                    font-size: 1.05rem;
                                    color: #111827;
                                    font-weight: 500;
                                "
                                onmouseover="this.style.borderColor='#2563eb'; this.style.background='#eff6ff'; this.style.transform='translateX(4px)';"
                                onmouseout="this.style.borderColor='#e5e7eb'; this.style.background='#f9fafb'; this.style.transform='translateX(0)';"
                            >
                                ${option.text}
                            </button>
                        `).join('')}
                    </div>
                </div>

                ${this.currentQuestion > 0 ? `
                    <div style="margin-top: 2rem; text-align: center;">
                        <button onclick="CareerTest.previousQuestion()" style="
                            padding: 0.875rem 2rem;
                            background: #6b7280;
                            color: white;
                            border: none;
                            border-radius: 12px;
                            font-weight: 700;
                            cursor: pointer;
                            transition: all 0.2s;
                        " onmouseover="this.style.background='#4b5563'" onmouseout="this.style.background='#6b7280'">
                            ← Previous Question
                        </button>
                    </div>
                ` : ''}
            </section>
        `;

        // Force scroll to ensure visibility below header
        window.scrollTo(0, 0);
        setTimeout(() => {
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    },

    selectAnswer(optionIndex) {
        const question = this.questions[this.currentQuestion];
        this.answers[this.currentQuestion] = question.options[optionIndex];

        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.renderQuestion();
        } else {
            this.showResults();
        }
    },

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.renderQuestion();
        }
    },

    async showResults() {
        const container = document.getElementById('career-test-container');
        
        container.innerHTML = `
            <section style="max-width: 800px; margin: 4rem auto; padding: 0 2rem; text-align: center;">
                <h2 style="font-size: 2.5rem; margin-bottom: 2rem; color: #111827;">Analyzing Your Results...</h2>
                <div style="width: 80px; height: 80px; border: 6px solid #e5e7eb; border-top-color: #2563eb; border-radius: 50%; margin: 2rem auto; animation: spin 1s linear infinite;"></div>
                <p style="color: #6b7280; font-size: 1.125rem;">Processing your 15 responses...</p>
            </section>
            <style>
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            </style>
        `;

        await new Promise(resolve => setTimeout(resolve, 2500));

        const categoryScores = {};
        this.answers.forEach(answer => {
            answer.categories.forEach(category => {
                categoryScores[category] = (categoryScores[category] || 0) + 1;
            });
        });

        const topCategories = Object.entries(categoryScores)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([category, score]) => ({
                category,
                percentage: Math.round((score / this.answers.length) * 100)
            }));

        let matchedCareers = [];
        try {
            const response = await fetch('../data/careers.json');
            const allCareers = await response.json();
            
            matchedCareers = allCareers
                .filter(career => topCategories.some(tc => tc.category === career.category))
                .slice(0, 6);
        } catch (error) {
            console.error('Error loading careers:', error);
        }

        container.innerHTML = `
            <div style="height: 20px;"></div>
            <section style="max-width: 1000px; margin: 2rem auto; padding: 0 2rem;">
                <div style="text-align: center; margin-bottom: 3rem;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">🎯</div>
                    <h1 style="font-size: 3rem; font-weight: 900; margin-bottom: 1rem; background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Your Career Matches</h1>
                    <p style="font-size: 1.25rem; color: #6b7280;">Based on your 15 responses, here are the career fields that match your profile</p>
                </div>

                <div style="background: white; padding: 2.5rem; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); margin-bottom: 3rem;">
                    <h3 style="font-size: 1.75rem; margin-bottom: 2rem; color: #111827;">Your Top Career Categories</h3>
                    ${topCategories.map(tc => `
                        <div style="margin-bottom: 2rem;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
                                <span style="font-weight: 700; color: #111827; font-size: 1.125rem;">${tc.category}</span>
                                <span style="color: #2563eb; font-weight: 700; font-size: 1.125rem;">${tc.percentage}% Match</span>
                            </div>
                            <div style="height: 14px; background: #e5e7eb; border-radius: 8px; overflow: hidden;">
                                <div style="height: 100%; background: linear-gradient(90deg, #2563eb, #8b5cf6); width: ${tc.percentage}%; transition: width 0.5s;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <h2 style="font-size: 2.5rem; margin-bottom: 2rem; text-align: center; background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Recommended Careers</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
                    ${matchedCareers.map(career => `
                        <div style="background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer; transition: all 0.3s; border: 2px solid transparent;"
                             onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 12px 24px rgba(37,99,235,0.2)'; this.style.borderColor='#2563eb';"
                             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.1)'; this.style.borderColor='transparent';"
                             onclick="window.location.href='../index.html#careers'">
                            <span style="display: inline-block; padding: 0.5rem 1rem; background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%); color: white; border-radius: 16px; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem;">
                                ${career.category}
                            </span>
                            <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #111827;">${career.title}</h3>
                            <p style="color: #6b7280; font-size: 1rem; margin-bottom: 1.25rem; line-height: 1.6;">
                                ${career.shortDescription || career.description?.substring(0, 120) + '...' || ''}
                            </p>
                            <div style="font-size: 0.9375rem; color: #10b981; font-weight: 600;">
                                💰 ${career.salary || 'Salary varies'}
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div style="text-align: center; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <button onclick="location.reload()" style="
                        padding: 1rem 2.5rem;
                        background: #6b7280;
                        color: white;
                        border: none;
                        border-radius: 12px;
                        font-weight: 700;
                        font-size: 1.125rem;
                        cursor: pointer;
                        transition: all 0.2s;
                    " onmouseover="this.style.background='#4b5563'; this.style.transform='translateY(-2px)'" onmouseout="this.style.background='#6b7280'; this.style.transform='translateY(0)'">
                        Retake Test
                    </button>
                    <a href="../index.html#careers" style="
                        padding: 1rem 2.5rem;
                        background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%);
                        color: white;
                        border: none;
                        border-radius: 12px;
                        font-weight: 700;
                        font-size: 1.125rem;
                        cursor: pointer;
                        transition: all 0.2s;
                        text-decoration: none;
                        display: inline-block;
                    " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 10px 25px rgba(37,99,235,0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                        Explore All Careers
                    </a>
                </div>
            </section>
        `;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('career-test-container')) {
        CareerTest.init();
    }
});

window.CareerTest = CareerTest;
