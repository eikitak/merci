'use strict';
{
    // オープニング
    const opening = function () {
        const el = document.querySelector('.wrapAll');
        const elImg = document.querySelector('.wrapAll img');
        gsap.timeline({ delay: 0.5, ease: 'power4.out' })
            .to(elImg, { height: 'auto', duration: .8, ease: 'bounce' })
            .to(elImg, { opacity: 0, display: 'none', duration: 1.2, delay: .7 })
            .to(el, { opacity: 0, display: 'none', duration: 2 }, '-=.5');
    }
    opening();

    // ヒーローイメージ
    const heroImg = function () {
        const hero1 = document.querySelector('.hero1');
        const hero2 = document.querySelectorAll('.hero2');
        gsap.set(hero2, { opacity: 0 });
        gsap.timeline({ delay: 3.5, repeat: -1 })
            .to(hero2, { opacity: 1, duration: 1, delay: 3, stagger: 4 })
            .to(hero2, { opacity: 0, duration: 1, delay: 3 });
    }
    heroImg();

    // ハンバーガーメニュー
    const openBtn = function () {
        const btn = document.querySelector('.open-btn');
        const nav = document.querySelector('nav');
        const body = document.querySelector('body');
        const html = document.querySelector('html');

        btn.addEventListener('click', (e) => {
            console.log('clicked!!');
            btn.classList.toggle('active');
            nav.classList.toggle('nav-active');
            body.classList.toggle('no-scroll');
            html.classList.toggle('no-scroll');
            e.stopPropagation();
        });

        document.querySelectorAll('nav li').forEach(navLink => {
            addEventListener('click', () => {
                btn.classList.remove('active');
                nav.classList.remove('nav-active');
                body.classList.remove('no-scroll');
                html.classList.remove('no-scroll');
            });
        });
    }
    openBtn();

    // 動くBG（不可が高いので中止）
    // const bgMove = function () {
    //     gsap.to('body', {
    //         backgroundPosition: '0% 100%',
    //         duration: 10,
    //         ease: 'power1.inOut',
    //         yoyo: true,
    //         repeat: -1,
    //     })
    // }
    // bgMove();

    // 伸びるボーダー
    const border = function () {
        const bd = document.querySelectorAll('.journal-box');
        bd.forEach(el => {
            el.addEventListener('mouseover', () => {
                el.classList.add('borderActive');
            });
        });
        bd.forEach(el => {
            el.addEventListener('mouseleave', () => {
                el.classList.remove('borderActive');
            });
        });
    }
    border();

    // ジャーナルのボタン
    const journalBtn = function () {
        const btn = document.querySelector('.journal-btn');
        const btnText = document.querySelector('.journal-btn p');
        btn.addEventListener('click', () => {
            document.querySelector('.journal-past').classList.toggle('jActive');
            btn.classList.toggle('btnActive');
            if (btn.classList.contains('btnActive')) {
                btnText.textContent = '過去のお知らせを閉じる';
            } else {
                btnText.textContent = '過去のお知らせを見る';
            }
        });
    }
    journalBtn();

    // スライドショー（splide.js)
    {
        const target = '.splide';
        const options = {
            type: 'loop',
            pagination: false,
            mediaQuery: 'max',
            perMove: 1,
            pauseOnHover: false,
            fixedWidth: '380px',
            gap: 16,
            updateOnMove: true,
            breakpoints: {
                630: {
                    fixedWidth: '320px',
                    gap: 16,
                    autoplay: 'pause',
                }
            },
        }
        const mySplide = new Splide(target, options).mount(window.splide.Extensions);
    }



}