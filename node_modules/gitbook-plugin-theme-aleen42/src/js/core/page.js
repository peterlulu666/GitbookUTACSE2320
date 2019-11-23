var $ = require('jquery');
var url = require('url');
var path = require('path');
var events = require('./events');

var started = false;
var state = {};

// State of scroll position
var scrollTop = 0;

/*
    Signal that page has changed, this function must be called by
    themes after page is loaded and when navigation changed
*/
function hasChanged(ctx) {
    // Remove all themes
    gitbook && gitbook.fontsettings && gitbook.fontsettings.setThemes([]); // eslint-disable-line no-undef

    console.log('page has changed', ctx); // eslint-disable-line no-console
    setState(ctx);
    // bind event of toggle mode
    $('.book-summary ul > .toggle-option').unbind('click').bind('click', function () {
        $(this).parent().toggleClass('toggled');
        return false;
    });
    // scroll to current chapter
    scrollToChapter(ctx.page.level);

    if (!started) {
        // Notify that gitbook is ready
        started = true;
        events.trigger('start', ctx.config.pluginsConfig);
    }

    events.trigger('page.change');
}

function scrollToChapter(level) {
    var $chapter = $('.book-summary .summary .chapter[data-level="' + level + '"]');

    var top = ($chapter.position() || {top: 0}).top;
    var $parent = $chapter.parent().closest('li');
    while ($parent.length) {
        top += $parent.position().top;
        $parent = $parent.parent().closest('li');
    }

    // Scroll to the specific navigator
    var $scroller = $('.book-summary');
    // Unbind scroll detection
    $scroller.unbind('scroll');
    $scroller.scroll(function () {
        scrollTop = $scroller[0].scrollTop;
    });

    $scroller.animate({scrollTop: scrollTop}, 0).animate({
        scrollTop: top - $scroller.height() * 0.382
    }, 800, 'swing');
}

/*
    Update current state

    data-level="{{ page.level }}"
    data-chapter-title="{{ page.title }}"
    data-filepath="{{ file.path }}"
    data-basepath="{{ './'|resolveFile }}"
    data-revision="{{ gitbook.time }}"
    data-innerlanguage="{{ innerlanguage }}">
*/
function setState(newState) {
    // API since GitBook v3
    state.page          = newState.page;
    state.file          = newState.file;
    state.gitbook       = newState.gitbook;
    state.config        = newState.config;
    state.basePath      = newState.basePath;
    state.book          = newState.book;

    // Deprecated
    state.$book         = $('.book');
    state.revision      = state.gitbook.time;
    state.level         = state.page.level;
    state.filepath      = state.file.path;
    state.chapterTitle  = state.page.title;
    state.innerLanguage = state.book.language || '';

    // Absolute url to the root of the book (inner book)
    state.root = url.resolve(
        location.protocol+'//'+location.host,
        path.dirname(path.resolve(location.pathname.replace(/\/$/, '/index.html'), state.basePath))
    ).replace(/\/?$/, '/');

    // Absolute root to the language (for multilingual book)
    state.bookRoot = state.innerLanguage? url.resolve(state.root, '..') : state.root;
}

/*
    Return state of current page
*/
function getState() {
    return state;
}


module.exports = {
    hasChanged: hasChanged,
    setState:   setState,
    getState:   getState
};
