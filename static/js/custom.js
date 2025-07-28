var fired = false;
window.addEventListener('scroll', loadWithDelay, false);
window.addEventListener('mousemove', loadWithDelay, false);

function loadWithDelay() {
    if (fired === false) {
        fired = true;

        setTimeout(() => {
            // findVideos();

            // table of contents smooth scroll to anchor
            $('.js-to-item').on('click', function () {
                try {
                    scrollToItem($(this));
                } catch (e) {
                    console.log(e);
                }
            });

            // threedots for long texts
            if ($('.js-threedots-text').length) {
                $('.js-threedots-text').dotdotdot({
                    ellipsis: '...',
                    keep: '.js-threedots-link-more'
                });
            }

            // fancybox
            if ($('[data-fancybox]').length) {
                $('[data-fancybox]').fancybox({
                    loop: true,
                    animationEffect: 'zoom-in-out',
                    closeClickOutside: true
                });
            }
        }, 100);
    }
}

$(document).ready(function () {
    setTimeout(function () {
        if (('.js-top-games-slider').length) {
            $('.js-top-games-slider').on('init', function () {
                $(this).removeClass('u-fix-height');
            }).slick({
                lazyLoad: 'ondemand',
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                autoplay: true,
                mobileFirst: true,
                autoplaySpeed: 5000,
                variableWidth: true,
                responsive: [{
                    breakpoint: 566,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 1365,
                    settings: {
                        slidesToShow: 9,
                        variableWidth: false
                    }
                }]
            });
        }

        if (('.js-preview-slider').length) {
            $('.js-preview-slider').on('init', function () {
                $(this).removeClass('u-fix-height');
            }).slick({
                lazyLoad: 'ondemand',
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [{
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 1,
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        arrows: true,
                    }
                }, {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3,
                        arrows: true,
                    }
                }]
            });
        }

        if (('.js-casinos-preview-slider').length) {
            $('.js-casinos-preview-slider').on('init', function () {
                $(this).removeClass('u-fix-height');
            }).slick({
                lazyLoad: 'ondemand',
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                mobileFirst: true,
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [{
                    breakpoint: 666,
                    settings: {
                        slidesToShow: 2,
                        arrows: true
                    }
                }, {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        arrows: true
                    }
                }]
            });
        }

        if (('.js-news-preview-slider').length) {
            $('.js-news-preview-slider').on('init', function () {
                $(this).removeClass('u-fix-height');
            }).slick({
                lazyLoad: 'ondemand',
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                mobileFirst: true,
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [{
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 2,
                        arrows: true
                    }
                }, {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                        arrows: true
                    }
                }]
            });
        }

        if (('.js-gallery-slider').length) {
            $('.js-gallery-slider').on('init', function () {
                $(this).removeClass('u-fix-height');
            }).slick({
                lazyLoad: 'ondemand',
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                mobileFirst: true,
                centerMode: true,
                variableWidth: true,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        centerMode: false,
                        variableWidth: false
                    }
                }, {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3,
                        centerMode: false,
                        variableWidth: false
                    }
                }, {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                        centerMode: false,
                        variableWidth: false
                    }
                }]
            });
        }

        // Form validate call
        $('.wpcf7-form').validate(validateParams);
        $('#commentform').validate(validateParams);

        // Header menu hide
        headerMenuHide.initialize();
    }, 2000);

    /* Slick needs no get Reinitialized on window Resize after it was destroyed */
    $(window).on('load resize orientationchange', function () {
        var $carousel = $('.js-breadcrumbs-slider');
        /* Initializes a slick carousel only on mobile screens */
        if (($(window).innerWidth() >= 768) && ($carousel.hasClass('slick-initialized'))) {
            $carousel.slick('unslick');
        } else if (($(window).innerWidth() < 768) && (!$carousel.hasClass('slick-initialized'))) {
            $carousel.on('init', function () {
                $(this).removeClass('u-fix-height');
            }).slick({
                lazyLoad: 'ondemand',
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                mobileFirst: true,
                variableWidth: true,
                infinite: false
            });
        }
    });

    // header dropdown on hover (desktop)
    $('.js-header .js-header-drop-btn').on('mouseenter focus', function (event) {
        if (window.innerWidth >= 1440) {
            $('.js-header .collapse').removeClass('in');
            $(this).parent().siblings('.collapse').addClass('in');
            event.stopPropagation();
            event.preventDefault();
        }
    });
    $('body').AddClassAnimation();

    $(window).on('load resize orientationchange', function () {
        if ($(window).innerWidth() <= 1024) {
            toggleMenuItem();
        }
    });

    // for header modal
    $('.js-modal-btn').click(function () {
        $(this).addClass('is-active');

        // show opened dropdown on mobile
        setTimeout(function () {
            $('.js-header-drop-btn.is-active').parent().addClass('open');
        }, 100);
    });

    $(document).on('hide.bs.modal', '.js-modal-main', function () {
        $('.js-modal-btn').removeClass('is-active');

        // hide opened dropdown on mobile after modal hides
        setTimeout(function () {
            $('.js-header-drop-btn.is-active').parent().removeClass('open');
        }, 200);
    });
    $(document).on('show.bs.modal', '.js-modal-main', function () {
        $('html, body').addClass('modal-noscroll');
    });
    $(document).on('hidden.bs.modal', '.js-modal-main', function () {
        $('html, body').removeClass('modal-noscroll');
    });
    $(document).on('show.bs.modal', '.js-modal-full', function () {
        $('html, body').addClass('modal-noscroll-full');
    });
    $(document).on('hidden.bs.modal', '.js-modal-full', function () {
        $('html, body').removeClass('modal-noscroll-full');
    });

    $('.modal').on('show.bs.modal', function () {
        var docHeight = $(document).height(),
            windowHeight = $(window).height(),
            docWidth = $(document).outerWidth(),
            windowWidth = $(window).outerWidth(),
            widthScroll = windowWidth - docWidth;

        if (docHeight > windowHeight) {
            // fix-scroll
            $('body').css('paddingRight', widthScroll);
        } else {
            $('body').css('paddingRight', '0');
        }
    }).on('hidden.bs.modal', function () {
        $('body').css('paddingRight', '0');
    });
});

// scroll add class

(function ($) {
    var addClassAnimation = {
        elementAnim: '.js-animate',
        classAnim: 'is-animated'
    };

    addClassAnimation.add = function () {
        var element = this.elementAnim;
        var addClass = this.classAnim;

        $(element).each(function () {
            var $this = $(this);
            var offsetEl = $this.offset();

            if (offsetEl.top <= $(document).scrollTop() + $(window).height() / 1.3) {
                $this.addClass(addClass);
            }
        });
    };

    $.fn.AddClassAnimation = function (options) {
        if (options && typeof options === 'object') {
            $.extend(addClassAnimation, options);
        }

        var $this = $(this);

        addClassAnimation.add($this);

        $(window).on('scroll', function () {
            addClassAnimation.add($this);
        });

        return this;
    };
})(jQuery);

// for youtube video

function findVideos() {
    var videos = document.querySelectorAll('.js-video');

    for (var i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    var link = video.querySelector('.js-video-link');
    var media = video.querySelector('.js-video-media');
    var button = video.querySelector('.js-video-button');
    var id = parseMediaURL(media);
    video.addEventListener('click', function () {
        var iframe = createIframe(id);
        link.remove();
        button.remove();
        video.appendChild(iframe);
    });
    link.removeAttribute('href');
    video.classList.add('is-enabled');
}

function parseMediaURL(media) {
    var regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    var url = media.src;
    var match = url.match(regexp);

    return match[1];
}

function createIframe(id) {
    var iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('iframe-video');

    return iframe;
}

function generateURL(id) {
    var query = '?rel=0&showinfo=0&autoplay=1';

    return `https://www.youtube.com/embed/${id}${query}`;
}

// polifil for .remove() es6

(function () {
    var arr = [window.Element, window.CharacterData, window.DocumentType];
    var args = [];

    arr.forEach(function (item) {
        if (item) {
            args.push(item.prototype);
        }
    });

    // (function (arr) {
    (function () {
        arr.forEach(function (item) {
            if (item.hasOwnProperty('remove')) {
                return;
            }
            Object.defineProperty(item, 'remove', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: function remove() {
                    this.parentNode.removeChild(this);
                }
            });
        });
    })(args);
})();

// call function with delay

function debounce(fn, interval) {
    var timer;
    return function () {
        clearTimeout(timer);
        var args = arguments;
        var self = this;
        timer = setTimeout(function () {
            fn.apply(self, args);
        }, interval);
    };
}

// share

$(document).ready(function () {
    $('.js-share').each(function () {
        var container = $(this).data('id');
        var link = $(this).data('link');
        var calculateCount = $(this).data('calculate'); // если нужны цифры с кол-вом поделившихся, но лучше без них чтобы не позориться нулями

        Share({
            container: `#${container}`,
            link,
            calculateCount
        });
    });
});

function Share(options) {
    var settings = $.extend({
        container: null,
        link: null,
        item: '.js-share-item',
        itemData: 'share',
        calculateCount: false,
        itemCount: '.js-share-count'
    }, options);

    var config = {
        fb: {
            url() {
                return `https://www.facebook.com/sharer.php?m2w&u=${encodeURIComponent(settings.link)}`;
            },
            count(callback) {
                $.getJSON(`https://graph.facebook.com/?id=${encodeURIComponent(settings.link)}`, function (data) {
                    var count = data.shares || 0;
                    callback(count);
                });
            }
        },
        tw: {
            url() {
                return `https://twitter.com/intent/tweet?url=${encodeURIComponent(settings.link)}`;
            },
            count(callback) {
                $.getJSON(`https://urls.api.twitter.com/1/urls/count.json?callback=?&url=${settings.link}`, function (data) {
                    var count = data.count || 0;
                    callback(count);
                });
            }
        },
        in: {
            url() {
                return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(settings.link)}`;
            },
            count(callback) {
                $.getJSON(`https://www.linkedin.com/countserv/count/share?callback=?&url=${settings.link}`, function (data) {
                    var count = data.count || 0;
                    callback(count);
                });
            }
        },
        vk: {
            url() {
                return `https://vk.com/share.php?url=${encodeURIComponent(settings.link)}`;
            },
            count(callback) {
                if (!window.VK) {
                    window.VK = {
                        Share: {
                            count(idx, shares) {
                                callback(shares);
                            }
                        }
                    };
                }
                $.getScript(`https://vk.com/share.php?act=count&url=${encodeURIComponent(settings.link)}`);
            }
        },
        ok: {
            url() {
                return `https://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl=${encodeURIComponent(settings.link)}`;
            },
            count(callback) {
                if (!window.ODKL) {
                    window.ODKL = {
                        updateCount(idx, shares) {
                            callback(shares);
                        }
                    };
                }
                $.getScript(`https://www.odnoklassniki.ru/dk?st.cmd=extLike&ref=${encodeURIComponent(settings.link)}`);
            }
        },
        mail: {
            url() {
                return `https://connect.mail.ru/share?url=${encodeURIComponent(settings.link)}`;
            },
            count(callback) {
                $.getJSON(`https://connect.mail.ru/share_count?url_list=${encodeURIComponent(settings.link)}`, function (data) {
                    var count = data[settings.link].shares || 0;
                    callback(count);
                });
            }
        },
        pin: {
            url() {
                return `https://pinterest.com/pin/create/link/?url=${encodeURIComponent(settings.link)}`;
            },
            count(callback) {
                $.getJSON(`https://api.pinterest.com/v1/urls/count.json?callback%20&url=${encodeURIComponent(settings.link)}`, function (data) {
                    var count = data.shares || 0;
                    callback(count);
                });
            }
        },
    };

    var openShareWindow = function () {
        var code = $(this).data(settings.itemData);

        if (config[code]) {
            var w = 600,
                h = 440,
                l = (Screen.width / 2) - (w / 2),
                t = (Screen.height / 2) - (h / 2);

            window.open(config[code].url(), '_blank', `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=${w}, height=${h}, top=${t}, left=${l}`);
        }

        return false;
    };

    $(settings.container).each(function () {
        var $items = $(this).find(settings.item);

        $items.click(openShareWindow);

        if (settings.calculateCount) {
            $items.each(function () {
                var $item = $(this),
                    code = $item.data(settings.itemData);

                if (config[code] && config[code].count) {
                    config[code].count(function (count) {
                        $item.find(settings.itemCount).html(count);
                    });
                }
            });
        }
    });
}

// validate form
var validateParams = {
    rules: {
        author: 'required',
        comment: {
            required: true,
            minlength: 10
        },
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        author: $('[for="author"]').data('error'),
        comment: $('[for="comment"]').data('error'),
        email: $('[for="email"]').data('error'),
    },
    submitHandler: function submitHandler(form) {
        var loader = '<div class="c-loader" style="margin-top: 20px"></div>';
        $('#form-message').remove();
        $('.wpcf7-form').append(loader);
        $('#commentform').append(loader);

        setTimeout(function () {
            $('.c-loader').remove();

            $('.wpcf7-form [name]').val('');

            var message = `<div id="form-message" style="display: block; text-align: left; margin-top: 15px"> ${$('#submit_button').data('send')} </div>`;

            if ($('#form-message').length === 0) {
                $('.wpcf7-form').append(message);
                $('#commentform').append(message);
            }
        }, 700);
    }
};

// Toggle menu item
function toggleMenuItem() {
    const menuList = document.querySelector('.js-menu-list'),
        activeItem = document.querySelector('.is-active');

    activeItem.parentNode.classList.add('is-hover');

    function clearItemHover() {
        const hoverElements = document.querySelectorAll('.is-hover');
        hoverElements.forEach((item) => {
            item.classList.remove('is-hover');
        });
    }

    menuList.addEventListener('click', (e) => {
        const { target } = e;
        if (target.classList.contains('js-menu-link') || target.classList.contains('js-menu-btn-collapse')) {
            clearItemHover();
            target.parentNode.classList.add('is-hover');
        }
    });
}

// Header menu hide
var headerMenuHide = (function ($) {
    var initialized = 0;

    var defaults = {
        targetSelector: '.js-header .collapse'
    };

    var settings = $.extend({}, defaults, {} || {});

    var initialize = function (params) {
        if (initialized) {
            return;
        }
        initialized = 1;

        settings = $.extend({}, defaults, params || {});

        $('.js-header .collapse').each(function () {
            var hoverTimeout;
            var thisLink = $(this).attr('aria-labelledby');
            $(this).hover(function () {
                clearTimeout(hoverTimeout);
            }, function () {
                var $self = $(this);

                if (window.innerWidth >= 1440 && !idIsHovered(thisLink)) {
                    hoverTimeout = setTimeout(function () {
                        $self.removeClass('in');
                    }, 500);
                }
            });
        });
    };

    var idIsHovered = function (id) {
        return $(`${id}:hover`).length > 0;
    };

    return {
        initialize,
    };
})(jQuery);

// scroll to element
function scrollToItem(elem) {
    var el = $(elem).attr('href').slice(1),
        elToScroll = $(`#${el}`),
        navHeight = 0,
        time = 500,
        gap = 50,
        offsetTop = elToScroll.offset().top,
        totalScroll = offsetTop - navHeight - gap;

    $('body,html').animate({
        scrollTop: totalScroll
    }, time);

    return false;
}
