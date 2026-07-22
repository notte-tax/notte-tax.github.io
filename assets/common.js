// 全ページ共通: ハンバーガーメニュー・追従ボタン・スクロールアニメーションの初期化
// ヘッダー/フッターHTMLはビルド時(build.js)にpartialから静的展開済みのため、ここでは注入しない。
(function () {
    function init() {
        // --- ハンバーガーメニューの制御 ---
        var hamburgerButton = document.getElementById('hamburger-button');
        var globalNav = document.getElementById('global-nav');

        if (hamburgerButton && globalNav) {
            hamburgerButton.addEventListener('click', function () {
                hamburgerButton.classList.toggle('is-active');
                globalNav.classList.toggle('is-open');
            });
        }

        // --- 追従ボタンの表示・非表示を制御 ---
        var sideButtons = document.querySelector('.side-sticky-buttons');
        var pageTopButton = document.getElementById('page-top-button');
        var priceCtaWrapper = document.getElementById('sticky-price-cta-wrapper');
        var priceCtaCloseBtn = document.getElementById('sticky-price-cta-close');

        if (sideButtons && pageTopButton) {
            window.addEventListener('scroll', function () {
                if (window.scrollY > 100) {
                    sideButtons.classList.add('show');
                    pageTopButton.classList.add('show');
                    if (priceCtaWrapper) priceCtaWrapper.classList.add('show');
                } else {
                    sideButtons.classList.remove('show');
                    pageTopButton.classList.remove('show');
                    if (priceCtaWrapper) priceCtaWrapper.classList.remove('show');
                }
            });
            pageTopButton.addEventListener('click', function (e) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        if (priceCtaCloseBtn && priceCtaWrapper) {
            priceCtaCloseBtn.addEventListener('click', function () {
                priceCtaWrapper.style.display = 'none';
            });
        }

        // --- スクロールアニメーションの制御 ---
        var fadeInTargets = document.querySelectorAll('.fade-in');
        if (fadeInTargets.length > 0) {
            var observer = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            fadeInTargets.forEach(function (target) {
                observer.observe(target);
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
