// Career Sahayak - Main Application JavaScript
console.log('Career Sahayak App Loaded - Version 2.1');

// Global state
let allCareers = [];
let filteredCareers = [];
let currentCategory = 'all';

// Load careers data
async function loadCareers() {
    console.log('🔄 Starting to load careers...');
    
    const container = document.getElementById('careers-container');
    const countElement = document.querySelector('.careers-count');
    
    try {
        console.log('📡 Fetching from data/careers.json...');
        const response = await fetch('data/careers.json');
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Ensure each career has an ID
        allCareers = data.map((career, index) => ({
            ...career,
            id: career.id || career.title.toLowerCase().replace(/\s+/g, '-') || `career-${index}`
        }));
        
        filteredCareers = [...allCareers];
        
        console.log(`✅ Successfully loaded ${allCareers.length} careers`);
        console.log('Sample career:', allCareers[0]);
        
        if (countElement) {
            countElement.textContent = `Showing all ${allCareers.length} careers`;
            countElement.style.color = '#2563eb';
        }
        
        displayCareers();
        setupFilters();
        
    } catch (error) {
        console.error('❌ Error loading careers:', error);
        
        if (container) {
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: white; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">⚠️</div>
                    <h3 style="font-size: 1.5rem; color: #ef4444; margin-bottom: 1rem;">Failed to Load Careers</h3>
                    <p style="color: #6b7280; margin-bottom: 1rem;">Error: ${error.message}</p>
                    <button onclick="location.reload()" style="padding: 0.75rem 2rem; background: #2563eb; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 1rem;">
                        Retry Loading
                    </button>
                </div>
            `;
        }
        
        if (countElement) {
            countElement.textContent = 'Failed to load careers';
            countElement.style.color = '#ef4444';
        }
    }
}

// Display careers - NO LIMIT, show ALL
function displayCareers() {
    const container = document.getElementById('careers-container');
    if (!container) {
        console.error('❌ careers-container element not found!');
        return;
    }

    console.log(`📊 Displaying ${filteredCareers.length} careers`);

    if (filteredCareers.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: white; border-radius: 16px;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🔍</div>
                <h3 style="font-size: 1.5rem; color: #6b7280; margin-bottom: 1rem;">No careers found</h3>
                <p style="color: #9ca3af;">Try selecting a different category or search term</p>
            </div>
        `;
        return;
    }

    // Display ALL filtered careers
    container.innerHTML = filteredCareers.map((career, index) => {
        // Use career ID or create one from title
        const careerId = career.id || career.title.toLowerCase().replace(/\s+/g, '-') || `career-${index}`;
        
        return `
            <div class="career-card" data-category="${career.category || 'Other'}" data-id="${careerId}">
                <div class="career-category">${career.category || 'General'}</div>
                <h3>${career.title}</h3>
                <p>${career.shortDescription || career.description?.substring(0, 120) + '...' || 'Explore this exciting career opportunity.'}</p>
                <div class="career-stats">
                    <span>💰 ${career.salary || 'Competitive salary'}</span>
                    <span>📈 ${career.growth || 'Good growth'}</span>
                </div>
                <button class="learn-more" onclick='openCareerModal(${JSON.stringify(careerId)})'>
                    Learn More →
                </button>
            </div>
        `;
    }).join('');

    updateCareerCount();
    console.log('✅ Careers displayed successfully');
}

// Update career count display
function updateCareerCount() {
    const countElement = document.querySelector('.careers-count');
    if (countElement) {
        if (currentCategory === 'all') {
            countElement.textContent = `Showing all ${filteredCareers.length} careers`;
        } else {
            countElement.textContent = `Showing ${filteredCareers.length} ${currentCategory} careers`;
        }
        countElement.style.color = '#2563eb';
    }
}

// Setup category filters
function setupFilters() {
    const categories = ['all', ...new Set(allCareers.map(c => c.category).filter(Boolean))];
    const filterContainer = document.querySelector('.category-filters');
    
    if (!filterContainer) {
        console.error('❌ category-filters element not found!');
        return;
    }

    console.log('🎨 Setting up filters for:', categories);

    filterContainer.innerHTML = categories.map(cat => `
        <button 
            class="filter-btn ${cat === currentCategory ? 'active' : ''}" 
            onclick="filterByCategory('${cat}')"
        >
            ${cat === 'all' ? 'All Careers' : cat}
        </button>
    `).join('');
}

// Filter careers by category
function filterByCategory(category) {
    console.log('🔍 Filtering by category:', category);
    currentCategory = category;
    
    const searchInput = document.getElementById('career-search');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    if (category === 'all') {
        filteredCareers = [...allCareers];
    } else {
        filteredCareers = allCareers.filter(c => c.category === category);
    }
    
    if (searchTerm) {
        filteredCareers = filteredCareers.filter(career => 
            career.title.toLowerCase().includes(searchTerm) ||
            career.description?.toLowerCase().includes(searchTerm) ||
            career.shortDescription?.toLowerCase().includes(searchTerm) ||
            career.category?.toLowerCase().includes(searchTerm)
        );
    }
    
    displayCareers();
    setupFilters();
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('career-search');
    if (!searchInput) {
        console.log('⚠️ Search input not found');
        return;
    }

    console.log('🔍 Setting up search functionality');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        console.log('🔍 Searching for:', searchTerm);
        
        const baseList = currentCategory === 'all' 
            ? allCareers
            : allCareers.filter(c => c.category === currentCategory);
        
        if (searchTerm === '') {
            filteredCareers = baseList;
        } else {
            filteredCareers = baseList.filter(career => 
                career.title.toLowerCase().includes(searchTerm) ||
                career.description?.toLowerCase().includes(searchTerm) ||
                career.shortDescription?.toLowerCase().includes(searchTerm) ||
                career.category?.toLowerCase().includes(searchTerm)
            );
        }
        
        displayCareers();
    });
}

// Open career detail modal - FIXED VERSION
function openCareerModal(careerId) {
    console.log('🔍 Looking for career with ID:', careerId);
    console.log('📋 Available careers:', allCareers.length);
    
    // Find career by ID or title
    let career = allCareers.find(c => c.id === careerId);
    
    // If not found by ID, try to find by title
    if (!career) {
        career = allCareers.find(c => 
            c.title.toLowerCase().replace(/\s+/g, '-') === careerId
        );
    }
    
    // If still not found, try index
    if (!career && careerId.startsWith('career-')) {
        const index = parseInt(careerId.replace('career-', ''));
        career = allCareers[index];
    }
    
    if (!career) {
        console.error('❌ Career not found:', careerId);
        console.error('Available IDs:', allCareers.map(c => c.id));
        alert('Career information not found. Please try again or refresh the page.');
        return;
    }

    console.log('✅ Found career:', career.title);

    const modal = document.getElementById('career-modal');
    const modalContent = document.getElementById('modal-content');
    
    if (!modal || !modalContent) {
        console.error('Modal elements not found!');
        return;
    }

    // Build comprehensive modal content
    modalContent.innerHTML = `
        <div class="modal-header">
            <div>
                <div class="career-category">${career.category || 'General'}</div>
                <h2>${career.title}</h2>
            </div>
            <button class="close-modal" onclick="closeCareerModal()" aria-label="Close">×</button>
        </div>
        <div class="modal-body">
            
            <section class="modal-section modal-overview">
                <div class="section-icon">📋</div>
                <div>
                    <h3>Career Overview</h3>
                    <p>${career.description || career.shortDescription || 'This career offers exciting opportunities for growth and development in a dynamic field.'}</p>
                </div>
            </section>

            <div class="modal-grid">
                <section class="modal-section modal-highlight">
                    <div class="section-icon">💰</div>
                    <div>
                        <h3>Salary Range</h3>
                        <p class="highlight-text">${career.salary || 'Competitive salary based on experience'}</p>
                        <p class="help-text">Entry to senior level positions</p>
                    </div>
                </section>

                <section class="modal-section modal-highlight">
                    <div class="section-icon">📈</div>
                    <div>
                        <h3>Growth Prospects</h3>
                        <p class="highlight-text">${career.growth || 'Excellent growth potential'}</p>
                        <p class="help-text">Career advancement opportunities</p>
                    </div>
                </section>
            </div>

            ${career.skills && career.skills.length > 0 ? `
                <section class="modal-section">
                    <div class="section-icon">🎯</div>
                    <div>
                        <h3>Required Skills</h3>
                        <div class="skills-tags">
                            ${career.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                        </div>
                    </div>
                </section>
            ` : `
                <section class="modal-section">
                    <div class="section-icon">🎯</div>
                    <div>
                        <h3>Required Skills</h3>
                        <p>Skills vary by specific role and organization. Common requirements include strong communication, problem-solving, and relevant technical expertise.</p>
                    </div>
                </section>
            `}

            ${career.education ? `
                <section class="modal-section">
                    <div class="section-icon">🎓</div>
                    <div>
                        <h3>Education Requirements</h3>
                        <p>${career.education}</p>
                    </div>
                </section>
            ` : `
                <section class="modal-section">
                    <div class="section-icon">🎓</div>
                    <div>
                        <h3>Education Requirements</h3>
                        <p>Typically requires relevant bachelor's degree or equivalent experience. Advanced positions may require master's degree or specialized certifications.</p>
                    </div>
                </section>
            `}

            ${career.responsibilities ? `
                <section class="modal-section">
                    <div class="section-icon">📝</div>
                    <div>
                        <h3>Key Responsibilities</h3>
                        <p>${career.responsibilities}</p>
                    </div>
                </section>
            ` : ''}

            ${career.workEnvironment ? `
                <section class="modal-section">
                    <div class="section-icon">🏢</div>
                    <div>
                        <h3>Work Environment</h3>
                        <p>${career.workEnvironment}</p>
                    </div>
                </section>
            ` : ''}

            <section class="modal-section modal-cta">
                <div class="section-icon">✨</div>
                <div>
                    <h3>Ready to explore this career?</h3>
                    <p>Take our personalized career assessment to see how well this career matches your interests and skills.</p>
                </div>
            </section>

            <div class="modal-actions">
                <a href="pages/career-test.html" class="btn-primary">
                    <span>Take Career Test</span>
                    <span>→</span>
                </a>
                <button onclick="closeCareerModal()" class="btn-secondary">Close</button>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        modal.classList.add('modal-open');
    }, 10);
}

// Close career modal
function closeCareerModal() {
    const modal = document.getElementById('career-modal');
    if (modal) {
        modal.classList.remove('modal-open');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('career-modal');
    if (event.target === modal) {
        closeCareerModal();
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCareerModal();
    }
});

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 90;
        const targetPosition = section.offsetTop - headerHeight - 20;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM Content Loaded - Initializing Career Sahayak');
    
    setTimeout(() => {
        loadCareers();
        setupSearch();
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = this.getAttribute('href').substring(1);
                if (target) scrollToSection(target);
            });
        });
        
        console.log('✅ Career Sahayak initialized successfully');
    }, 150);
});

// Make functions globally available
window.filterByCategory = filterByCategory;
window.openCareerModal = openCareerModal;
window.closeCareerModal = closeCareerModal;
window.scrollToSection = scrollToSection;

console.log('📦 App.js loaded and ready');
