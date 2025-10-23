// AI Career Chatbot System
console.log('AI Chatbot module loaded');

class CareerChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.isTyping = false;
        this.conversationContext = [];
        
        this.init();
    }

    init() {
        this.createChatbotUI();
        this.attachEventListeners();
        this.loadWelcomeMessage();
    }

    createChatbotUI() {
        const chatbotHTML = `
            <!-- Chatbot Button -->
            <button class="chatbot-button" id="chatbot-toggle">
                🤖
            </button>

            <!-- Chatbot Window -->
            <div class="chatbot-window" id="chatbot-window">
                <!-- Header -->
                <div class="chatbot-header">
                    <div class="chatbot-header-content">
                        <div class="chatbot-avatar">🤖</div>
                        <div class="chatbot-info">
                            <h3>Career AI Assistant</h3>
                            <p>Online • Ready to help</p>
                        </div>
                    </div>
                    <button class="chatbot-close" id="chatbot-close">✕</button>
                </div>

                <!-- Messages Container -->
                <div class="chatbot-messages" id="chatbot-messages">
                    <!-- Messages will be added here -->
                </div>

                <!-- Input Area -->
                <div class="chatbot-input">
                    <div class="chatbot-input-wrapper">
                        <textarea 
                            id="chatbot-input" 
                            placeholder="Ask me about careers, skills, or education..."
                            rows="1"
                        ></textarea>
                        <button class="chatbot-send-btn" id="chatbot-send">
                            ➤
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }

    attachEventListeners() {
        const toggleBtn = document.getElementById('chatbot-toggle');
        const closeBtn = document.getElementById('chatbot-close');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-input');

        toggleBtn.addEventListener('click', () => this.toggleChat());
        closeBtn.addEventListener('click', () => this.closeChat());
        sendBtn.addEventListener('click', () => this.sendMessage());
        
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Auto-resize textarea
        input.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 100) + 'px';
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const window = document.getElementById('chatbot-window');
        
        if (this.isOpen) {
            window.classList.add('active');
        } else {
            window.classList.remove('active');
        }
    }

    closeChat() {
        this.isOpen = false;
        document.getElementById('chatbot-window').classList.remove('active');
    }

    loadWelcomeMessage() {
        setTimeout(() => {
            this.addMessage('bot', `
                <div class="welcome-message">
                    <h4>👋 Welcome to Career Sahayak AI!</h4>
                    <p>I'm here to help you with career guidance. Ask me anything about:</p>
                </div>
            `);

            this.addQuickSuggestions([
                'What careers match my interests?',
                'Tell me about Data Science',
                'What skills do I need for tech?',
                'Career salary information',
                'How to become a Software Developer?'
            ]);
        }, 500);
    }

    async sendMessage() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();

        if (!message || this.isTyping) return;

        // Add user message
        this.addMessage('user', message);
        input.value = '';
        input.style.height = 'auto';

        // Show typing indicator
        this.showTyping();

        // Get AI response
        const response = await this.getAIResponse(message);
        
        // Hide typing and show response
        this.hideTyping();
        this.addMessage('bot', response);
    }

    async getAIResponse(userMessage) {
        // Store message in context
        this.conversationContext.push({ role: 'user', content: userMessage });

        // Simulate AI processing delay
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

        // AI Response Logic
        const response = this.generateResponse(userMessage.toLowerCase());
        
        this.conversationContext.push({ role: 'assistant', content: response });
        
        return response;
    }

    generateResponse(message) {
        // Career-related keywords and responses
        const responses = {
            greetings: ['hi', 'hello', 'hey', 'good morning', 'good afternoon'],
            careers: ['career', 'job', 'profession', 'occupation'],
            skills: ['skill', 'learn', 'study', 'education', 'qualification'],
            salary: ['salary', 'pay', 'income', 'earning', 'wage'],
            technology: ['software', 'developer', 'programmer', 'coding', 'tech', 'it', 'data science', 'ai', 'machine learning'],
            healthcare: ['doctor', 'nurse', 'medical', 'healthcare', 'hospital'],
            business: ['business', 'management', 'mba', 'entrepreneur', 'startup'],
            help: ['help', 'assist', 'guide', 'advice']
        };

        // Check for greetings
        if (responses.greetings.some(word => message.includes(word))) {
            return `Hello! 👋 I'm your Career AI Assistant. I can help you with:
                <br><br>
                • Career exploration and recommendations
                <br>• Skill requirements and learning paths
                <br>• Salary information and job outlook
                <br>• Educational requirements
                <br><br>
                What would you like to know?`;
        }

        // Technology careers
        if (responses.technology.some(word => message.includes(word))) {
            if (message.includes('data science') || message.includes('data scientist')) {
                return `<strong>Data Scientist Career Path:</strong>
                    <br><br>
                    📊 <strong>Overview:</strong> Analyzes complex data to help organizations make informed decisions.
                    <br><br>
                    💰 <strong>Salary:</strong> ₹6,00,000 - ₹25,00,000 per year
                    <br><br>
                    📚 <strong>Required Skills:</strong>
                    <br>• Python, R, SQL
                    <br>• Machine Learning & Statistics
                    <br>• Data Visualization
                    <br>• Problem-solving
                    <br><br>
                    🎓 <strong>Education:</strong> Bachelor's in Computer Science, Statistics, or related field. Master's preferred.
                    <br><br>
                    📈 <strong>Job Outlook:</strong> Excellent - 35% growth expected
                    <br><br>
                    Would you like to take our career test to see if this matches your profile?`;
            }
            
            return `<strong>Technology Careers</strong> are in high demand! 🚀
                <br><br>
                Popular tech careers include:
                <br>• Software Developer (₹4L-₹20L)
                <br>• Data Scientist (₹6L-₹25L)
                <br>• Cybersecurity Analyst (₹5L-₹20L)
                <br>• Cloud Architect (₹8L-₹30L)
                <br>• AI/ML Engineer (₹7L-₹28L)
                <br><br>
                These careers offer excellent growth prospects and competitive salaries. Which one interests you most?`;
        }

        // Healthcare careers
        if (responses.healthcare.some(word => message.includes(word))) {
            return `<strong>Healthcare Careers</strong> are rewarding and stable! 🏥
                <br><br>
                Top healthcare careers:
                <br>• Doctor (₹8L-₹50L+)
                <br>• Registered Nurse (₹3L-₹8L)
                <br>• Pharmacist (₹3L-₹9L)
                <br>• Medical Lab Technician (₹2.5L-₹6L)
                <br>• Healthcare Administrator (₹5L-₹15L)
                <br><br>
                Healthcare offers job security and the satisfaction of helping others. What area interests you?`;
        }

        // Business careers
        if (responses.business.some(word => message.includes(word))) {
            return `<strong>Business & Management Careers</strong> 💼
                <br><br>
                Promising business careers:
                <br>• Business Analyst (₹5L-₹18L)
                <br>• Project Manager (₹6L-₹25L)
                <br>• Marketing Manager (₹5L-₹20L)
                <br>• HR Manager (₹5L-₹18L)
                <br>• Operations Manager (₹6L-₹22L)
                <br><br>
                Business careers offer diverse opportunities across industries. Would you like details on any specific role?`;
        }

        // Skills and learning
        if (responses.skills.some(word => message.includes(word))) {
            return `<strong>Building the Right Skills</strong> 🎯
                <br><br>
                Most in-demand skills in 2025:
                <br><br>
                <strong>Technical:</strong>
                <br>• Programming (Python, JavaScript, Java)
                <br>• Data Analysis & AI/ML
                <br>• Cloud Computing (AWS, Azure)
                <br>• Cybersecurity
                <br><br>
                <strong>Soft Skills:</strong>
                <br>• Communication
                <br>• Problem-solving
                <br>• Leadership
                <br>• Adaptability
                <br><br>
                Which area would you like to develop?`;
        }

        // Salary information
        if (responses.salary.some(word => message.includes(word))) {
            return `<strong>Career Salary Information</strong> 💰
                <br><br>
                Average salary ranges in India:
                <br><br>
                <strong>Technology:</strong> ₹4L - ₹25L
                <br><strong>Healthcare:</strong> ₹3L - ₹50L+
                <br><strong>Finance:</strong> ₹4.5L - ₹30L
                <br><strong>Engineering:</strong> ₹3.5L - ₹20L
                <br><strong>Business:</strong> ₹4L - ₹25L
                <br><br>
                Salaries vary based on experience, location, and company. Which industry are you interested in?`;
        }

        // Career test
        if (message.includes('test') || message.includes('assessment') || message.includes('match')) {
            return `<strong>Take Our Career Test!</strong> 🎯
                <br><br>
                Our comprehensive career assessment helps you:
                <br>• Identify your strengths and interests
                <br>• Discover matching career paths
                <br>• Get personalized recommendations
                <br>• Understand required skills
                <br><br>
                The test takes about 5-7 minutes and analyzes 15 different aspects of your personality and preferences.
                <br><br>
                <a href="pages/career-test.html" style="color: var(--primary-color); font-weight: 600;">Start Career Test Now →</a>`;
        }

        // Help
        if (responses.help.some(word => message.includes(word))) {
            return `<strong>How Can I Help You?</strong> 🤝
                <br><br>
                I can assist with:
                <br><br>
                📊 <strong>Career Exploration</strong>
                <br>Learn about 88+ different careers across various industries
                <br><br>
                💡 <strong>Skill Guidance</strong>
                <br>Understand what skills you need for your dream career
                <br><br>
                💰 <strong>Salary Information</strong>
                <br>Get realistic salary expectations for different roles
                <br><br>
                🎓 <strong>Education Paths</strong>
                <br>Discover educational requirements and learning resources
                <br><br>
                🎯 <strong>Career Matching</strong>
                <br>Take our test to find careers that match your profile
                <br><br>
                What would you like to know more about?`;
        }

        // Default response
        return `I understand you're asking about "${message}". 
            <br><br>
            I can help you with:
            <br>• Exploring specific careers
            <br>• Understanding skill requirements
            <br>• Salary and job outlook information
            <br>• Taking our career assessment test
            <br><br>
            Could you please ask about a specific career field (like Technology, Healthcare, Business) or take our career test for personalized recommendations?`;
    }

    addMessage(sender, content) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        const messageHTML = `
            <div class="message ${sender}">
                <div class="message-avatar">${sender === 'bot' ? '🤖' : '👤'}</div>
                <div class="message-content">
                    <div class="message-bubble">${content}</div>
                    <div class="message-time">${time}</div>
                </div>
            </div>
        `;

        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
    }

    addQuickSuggestions(suggestions) {
        const messagesContainer = document.getElementById('chatbot-messages');
        
        const suggestionsHTML = `
            <div class="quick-suggestions">
                ${suggestions.map(suggestion => `
                    <button class="suggestion-chip" onclick="window.careerChatbot.handleSuggestion('${suggestion}')">
                        ${suggestion}
                    </button>
                `).join('')}
            </div>
        `;

        messagesContainer.insertAdjacentHTML('beforeend', suggestionsHTML);
        this.scrollToBottom();
    }

    handleSuggestion(suggestion) {
        document.getElementById('chatbot-input').value = suggestion;
        this.sendMessage();
    }

    showTyping() {
        this.isTyping = true;
        const messagesContainer = document.getElementById('chatbot-messages');
        
        const typingHTML = `
            <div class="typing-indicator" id="typing-indicator">
                <div class="message-avatar">🤖</div>
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;

        messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
        this.scrollToBottom();
    }

    hideTyping() {
        this.isTyping = false;
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbot-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.careerChatbot = new CareerChatbot();
    console.log('Career AI Chatbot initialized');
});
