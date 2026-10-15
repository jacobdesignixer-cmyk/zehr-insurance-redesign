// ==========================================================================
// ZEHR INSURANCE REDESIGN - INTERACTIVE CORE ENGINE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initQuoteCalculator();
  initCoverageFilters();
  initAdvisorDirectory();
  initConciergeDrawer();
  initModalHandlers();
  initMobileNav();
  initSmoothScroll();
});

// 1. Sticky Glass Header on Scroll
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// 2. Interactive Quick Quote Calculator & Estimator
function initQuoteCalculator() {
  const tabBtns = document.querySelectorAll('.quote-tab-btn');
  const quoteForm = document.getElementById('quickQuoteForm');
  const assetValSelect = document.getElementById('assetValue');
  const coverageTypeInput = document.getElementById('coverageType');

  // Tab Switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const type = btn.getAttribute('data-type');
      if (coverageTypeInput) coverageTypeInput.value = type;
      
      // Update asset label dynamically
      const assetLabel = document.querySelector('label[for="assetValue"]');
      if (assetLabel) {
        if (type === 'auto') assetLabel.textContent = 'Vehicle Value / Year';
        else if (type === 'home') assetLabel.textContent = 'Property Rebuild Est.';
        else if (type === 'vintage') assetLabel.textContent = 'Agreed Collector Appraisal';
        else if (type === 'farm') assetLabel.textContent = 'Acreage & Livestock Val.';
        else if (type === 'business') assetLabel.textContent = 'Annual Gross Revenue';
      }
    });
  });

  // Form Submission
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const type = coverageTypeInput ? coverageTypeInput.value : 'auto';
      const postal = document.getElementById('postalCode').value.trim() || 'N3A 1K1';
      const deductible = document.getElementById('deductiblePref').value;
      
      // Calculate realistic premium benchmark
      let baseRate = 89;
      if (type === 'vintage') baseRate = 38; // Collector car specialty rates are famously affordable in Ontario
      else if (type === 'home') baseRate = 110;
      else if (type === 'farm') baseRate = 185;
      else if (type === 'business') baseRate = 220;

      // Adjust for deductible
      if (deductible === '2500') baseRate = Math.round(baseRate * 0.82);
      if (deductible === '500') baseRate = Math.round(baseRate * 1.18);

      showQuoteModal({
        type: type.toUpperCase(),
        postal: postal.toUpperCase(),
        monthlyEst: baseRate,
        annualEst: baseRate * 12
      });
    });
  }
}

// 3. Interactive Coverage Navigator Filters
function initCoverageFilters() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.arch-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const category = pill.getAttribute('data-filter');

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 4. Local Advisor & Branch Filter
function initAdvisorDirectory() {
  const branchPills = document.querySelectorAll('.branch-pill');
  const advisorCards = document.querySelectorAll('.advisor-card');

  branchPills.forEach(pill => {
    pill.addEventListener('click', () => {
      branchPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const branch = pill.getAttribute('data-branch');

      advisorCards.forEach(card => {
        const cardBranch = card.getAttribute('data-branch');
        if (branch === 'all' || cardBranch === branch) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 5. Floating AI Concierge / Assistant Drawer (Ref 2 Inspiration)
function initConciergeDrawer() {
  const toggleBtn = document.getElementById('floatingHelperBtn');
  const drawer = document.getElementById('conciergeDrawer');
  const closeBtn = document.getElementById('closeConciergeBtn');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('active');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('active');
    });
  }

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !toggleBtn.contains(e.target) && drawer.classList.contains('active')) {
      drawer.classList.remove('active');
    }
  });
}

// 6. Interactive Modal System
function initModalHandlers() {
  const backdrop = document.getElementById('quoteModalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');
  const lockQuoteBtn = document.getElementById('lockQuoteBtn');

  if (!backdrop) return;

  const closeModal = () => {
    backdrop.classList.remove('active');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  if (lockQuoteBtn) {
    lockQuoteBtn.addEventListener('click', () => {
      const emailInput = document.getElementById('modalUserEmail');
      if (emailInput && !emailInput.value) {
        emailInput.focus();
        emailInput.style.borderColor = '#ef4444';
        return;
      }
      lockQuoteBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Quote Locked & Dispatched!
      `;
      lockQuoteBtn.style.background = '#10b981';
      setTimeout(() => {
        closeModal();
        setTimeout(() => {
          lockQuoteBtn.innerHTML = 'Lock In Quote & Assign Broker';
          lockQuoteBtn.style.background = '';
        }, 1000);
      }, 1600);
    });
  }
}

function showQuoteModal({ type, postal, monthlyEst, annualEst }) {
  const backdrop = document.getElementById('quoteModalBackdrop');
  if (!backdrop) return;

  const planTypeEl = document.getElementById('modalPlanType');
  const postalEl = document.getElementById('modalPostal');
  const monthlyEl = document.getElementById('modalMonthlyVal');
  const annualEl = document.getElementById('modalAnnualVal');

  if (planTypeEl) planTypeEl.textContent = type;
  if (postalEl) postalEl.textContent = postal;
  if (monthlyEl) monthlyEl.textContent = `$${monthlyEst}/mo`;
  if (annualEl) annualEl.textContent = `$${annualEst}/yr`;

  backdrop.classList.add('active');
}

// 7. Mobile Navigation Drawer
function initMobileNav() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav-links');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.style.display === 'flex';
    if (isOpen) {
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '100%';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.background = 'rgba(255, 255, 255, 0.98)';
      nav.style.padding = '1.5rem';
      nav.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
      nav.style.borderBottom = '1px solid #e2e8f0';
    }
  });
}

// 8. Smooth scrolling for internal anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Global Concierge Quick Action Trigger
window.triggerConciergeAction = function(action) {
  const drawer = document.getElementById('conciergeDrawer');
  if (drawer) drawer.classList.remove('active');

  if (action === 'quote') {
    const quoteBar = document.getElementById('quoteBar');
    if (quoteBar) quoteBar.scrollIntoView({ behavior: 'smooth' });
  } else if (action === 'claim') {
    const claims = document.getElementById('claimsSection');
    if (claims) claims.scrollIntoView({ behavior: 'smooth' });
  } else if (action === 'vintage') {
    const vintage = document.getElementById('vintageSection');
    if (vintage) vintage.scrollIntoView({ behavior: 'smooth' });
  } else if (action === 'advisors') {
    const adv = document.getElementById('advisorsSection');
    if (adv) adv.scrollIntoView({ behavior: 'smooth' });
  }
};
