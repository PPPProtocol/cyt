
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// парт с тайм маркой

const newContainer = document.createElement('div');
newContainer.className = 'zxc1';

newContainer.innerHTML = `
<style>
.zxc1 {
    display: flex;
    gap: 4px;
    top: 62%;
    transform: translateY(0%);
    width: auto;
    flex-direction: column;
    align-items: flex-end;
    color: white;
    z-index: 6969;
    position: fixed;
    font-family: Nunito, sans-serif !important;
    padding: 8px;
    margin: 4px;
    background-color: rgb(0 0 0 / 30%);
    box-shadow: 0 0 0px 1px #313131;
    border-radius: 4px;
    font-weight: 600;
    right: 5px;
    backdrop-filter: blur(1px);
}
.zxc1-date, .zxc1-time {
    padding: 2px 8px;
    background-color: rgb(218 218 218 / 0%);
    border-radius: 0px;
    font-size: 15px;
}
body {
    font-family: Nunito, sans-serif !important;
}
</style>

<div class="zxc1-date"></div>
<div class="zxc1-time"></div>
`;

document.body.appendChild(newContainer);

function updateDateTime() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const formattedDate = `${day}.${month}.${year}`;

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    newContainer.querySelector('.zxc1-date').textContent = formattedDate;
    newContainer.querySelector('.zxc1-time').textContent = formattedTime;
}

updateDateTime();

setInterval(updateDateTime, 1000);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// парт со стилями

(function () {
    'use strict';

    const styleContainer = document.createElement('div');
    styleContainer.className = 'zxc2';
    styleContainer.innerHTML = `
<style>
    ._2wuBnG966XHSI_-fn_Jx_G {
        background-color: #ffffff04;
    }
    ._2EB32MHQgo3UaKU6W6Swv8:hover {
        background-color: #00000080;
    }
    ._3FhTeRlrih_6_JL1bed2gu {
        color: #dadada;
        margin: -1px;
        font-weight: 600;
    }
    ._2bVIvZurytR82-_hb49CoI {
        position: absolute;
        width: 240px;
        top: 0;
        right: 0;
        z-index: 1;
        padding: 10px;
        box-shadow: 0 0 0 1px #313131;
        border-radius: 4px;
        margin: 10px;
        backdrop-filter: blur(4px);
        background-color: rgba(0, 0, 0, 0.3);
    }
    ._2EB32MHQgo3UaKU6W6Swv8 { padding: 8px; }
    .TnC3xkqX1s78whCX-mO7F {
        position: fixed;
        color: white;
        z-index: 5;
        padding: 0;
        background-color: rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 1px #313131;
        backdrop-filter: blur(4px);
        border-radius: 4px;
        animation: _3881Wg0zP6azCnTEAGZjeC 0.5s;
    }
    ._3dnqX0svpxoHIfUYa4wG0l { text-shadow: 0 0 5px black; }
    ._27vfvhn41RHoKQXqaZEYBq {
        font-size: 14px;
        text-shadow: 0 0 5px #00000080;
    }
    ::-webkit-scrollbar { width: 0; }
    ._1FlWeEtrJKCnvzX-Y50CLP {
        bottom: 0;
        left: 0;
        height: 270px;
        width: 400px;
        border-radius: 4px;
        box-shadow: 0 0 0 1px #313131;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        position: absolute;
        z-index: 1;
    }
    .stats1 { display: flex; gap: 12px; }
    ._18dy15OS3cpivsZTZwTX8o {
        margin: 4px;
        display: grid;
        grid-template-columns: auto;
        justify-items: center;
        row-gap: 5px;
    }
    ._2e7Hnzd56a2gMbdzXk5kJb {
        color: white;
        position: absolute;
        top: 0;
        left: 0;
        padding: 6px;
        margin: 4px;
        box-shadow: 0 0 0 1px #313131;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        border-radius: 4px;
        pointer-events: none;
        font-size: 14px;
        font-weight: bold;
    }
    ._3kJp2VbBkLeYF5qFwAY7fH {
        color: white;
        position: absolute;
        top: 72px;
        left: 0;
        padding: 8px;
        margin: 4px;
        border-radius: 4px;
        backdrop-filter: blur(4px);
        box-shadow: 0 0 0 1px #313131;
        font-size: 14px;
    }
    .ysK8mR2CZVPSuEyM1geBP {
        display: grid;
        grid-template-columns: 140px 60px 100px;
        padding: 3px;
    }
</style>
`;
    document.body.appendChild(styleContainer);

    function updateGradient() {
        const colorSource = document.querySelector('._12r-kWKkjIkrwbXraUuxRS');
        const gradientElement = document.querySelector('._3kJp2VbBkLeYF5qFwAY7fH');

        if (!colorSource || !gradientElement) {
            setTimeout(updateGradient, 1000);
            return;
        }

        const sourceColor = getComputedStyle(colorSource).color;
        gradientElement.style.background = `
            linear-gradient(
                0deg,
                ${sourceColor.replace(')', ', 0.25)')},
                rgba(0, 0, 0, 0.3)
            )
        `;
    }

    function addStats1Class() {
        const root = document.querySelector('._2e7Hnzd56a2gMbdzXk5kJb');
        if (root?.children[0] && !root.children[0].classList.contains('stats1')) {
            const firstChild = root.children[0];
            firstChild.classList.add('stats1');
            [...firstChild.children].forEach((child, idx) => {
                child.classList.add(`statschild${idx + 1}`);
            });
        }
    }

    function observeStatsContainer() {
        const observer = new MutationObserver((mutations) => {
            const needsUpdate = mutations.some(mutation => {
                return Array.from(mutation.addedNodes).some(node => {
                    return node.classList?.contains('_2e7Hnzd56a2gMbdzXk5kJb') ||
                           (node.querySelector && node.querySelector('._2e7Hnzd56a2gMbdzXk5kJb'));
                });
            });

            if (needsUpdate) {
                addStats1Class();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function observeGradientSource() {
        const observer = new MutationObserver((mutations) => {
            const needsUpdate = mutations.some(mutation => {
                return Array.from(mutation.addedNodes).some(node => {
                    return node.classList?.contains('_12r-kWKkjIkrwbXraUuxRS') ||
                           (node.querySelector && node.querySelector('._12r-kWKkjIkrwbXraUuxRS'));
                });
            });

            if (needsUpdate) {
                updateGradient();
                const colorSource = document.querySelector('._12r-kWKkjIkrwbXraUuxRS');
                if (colorSource) {
                    const colorObserver = new MutationObserver(() => updateGradient());
                    colorObserver.observe(colorSource, {
                        attributes: true,
                        attributeFilter: ['style', 'class']
                    });
                }
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function init() {
        addStats1Class();
        updateGradient();
        observeStatsContainer();
        observeGradientSource();

        const colorSource = document.querySelector('._12r-kWKkjIkrwbXraUuxRS');
        if (colorSource) {
            const colorObserver = new MutationObserver(() => updateGradient());
            colorObserver.observe(colorSource, {
                attributes: true,
                attributeFilter: ['style', 'class']
            });

            setInterval(updateGradient, 3000);
        } else {
            const checkInterval = setInterval(() => {
                if (document.querySelector('._12r-kWKkjIkrwbXraUuxRS')) {
                    clearInterval(checkInterval);
                    updateGradient();
                }
            }, 1000);
        }
    }

    if (document.readyState === 'complete') {
        setTimeout(init, 1000);
    } else {
        window.addEventListener('load', () => setTimeout(init, 1000));
    }
})();
