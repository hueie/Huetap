



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>zepto/event.js at master · madrobby/zepto · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="madrobby/zepto" name="twitter:title" /><meta content="zepto - Zepto.js is a minimalist JavaScript library for modern browsers, with a jQuery-compatible API" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/3390?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/3390?v=3&amp;s=400" property="og:image" /><meta content="madrobby/zepto" property="og:title" /><meta content="https://github.com/madrobby/zepto" property="og:url" /><meta content="zepto - Zepto.js is a minimalist JavaScript library for modern browsers, with a jQuery-compatible API" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="7BD42BF0:71AC:21E3A01:56A0A6F8" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="27b54ef728ca5709d308bf2d765951d22f7c1395" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-e64d783fc73cc815bb639b1ee740d83c08b1a72e2955dbd871b5971946f6f73d.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-d67e665a5adcb4911576562cbeb82c00d697b1f31e846c253fec048877a6b457.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="5360bf34e00996a095e844e73e40b165">

      
  <meta name="description" content="zepto - Zepto.js is a minimalist JavaScript library for modern browsers, with a jQuery-compatible API">
  <meta name="go-import" content="github.com/madrobby/zepto git https://github.com/madrobby/zepto.git">

  <meta content="3390" name="octolytics-dimension-user_id" /><meta content="madrobby" name="octolytics-dimension-user_login" /><meta content="924303" name="octolytics-dimension-repository_id" /><meta content="madrobby/zepto" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="924303" name="octolytics-dimension-repository_network_root_id" /><meta content="madrobby/zepto" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/madrobby/zepto/commits/master.atom" rel="alternate" title="Recent Commits to zepto:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/madrobby/zepto/blob/master/src/event.js" data-pjax-transient>
  </head>


  <body class="logged_out   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    <div class="unsupported-browser">
  <div class="container clearfix">
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/site/dismiss_unsupported_browser" data-form-nonce="27b54ef728ca5709d308bf2d765951d22f7c1395" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="hM+C9SfTsgsVC5MaMnbzUtYg4FqeljGVrJ7K9aqcaXOCsAAh6oUQoweFJT1iE+IXAi6MeZFCGhQWTb4rSr219g==" /></div>
      <button class="btn btn-danger">Ignore</button>
</form>    <a href="https://help.github.com/articles/supported-browsers" class="btn">Learn more</a>

        <h5>Please note that GitHub no longer supports Internet Explorer versions 7 or 8.</h5>
      <p>We recommend upgrading to the latest <a href="http://windows.microsoft.com/ie">Internet Explorer</a>, <a href="https://chrome.google.com">Google Chrome</a>, or <a href="https://mozilla.org/firefox/">Firefox</a>.</p>
      <p>If you are using IE 11, make sure you <a href="http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer">turn off "Compatibility View"</a>.</p>
  </div>
</div>




      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span aria-hidden="true" class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fmadrobby%2Fzepto%2Fblob%2Fmaster%2Fsrc%2Fevent.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/madrobby/zepto/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/madrobby/zepto/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fmadrobby%2Fzepto"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span aria-hidden="true" class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/madrobby/zepto/watchers">
    540
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmadrobby%2Fzepto"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span aria-hidden="true" class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/madrobby/zepto/stargazers">
      9,952
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fmadrobby%2Fzepto"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span aria-hidden="true" class="octicon octicon-repo-forked"></span>
        Fork
      </a>

    <a href="/madrobby/zepto/network" class="social-count">
      2,424
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span aria-hidden="true" class="octicon octicon-repo"></span>
  <span class="author"><a href="/madrobby" class="url fn" itemprop="url" rel="author"><span itemprop="title">madrobby</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/madrobby/zepto" data-pjax="#js-repo-pjax-container">zepto</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/madrobby/zepto" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /madrobby/zepto">
    <span aria-hidden="true" class="octicon octicon-code"></span>
    Code
</a>
    <a href="/madrobby/zepto/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /madrobby/zepto/issues">
      <span aria-hidden="true" class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">72</span>
</a>
  <a href="/madrobby/zepto/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /madrobby/zepto/pulls">
    <span aria-hidden="true" class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">45</span>
</a>

  <a href="/madrobby/zepto/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /madrobby/zepto/pulse">
    <span aria-hidden="true" class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/madrobby/zepto/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /madrobby/zepto/graphs">
    <span aria-hidden="true" class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/madrobby/zepto/blob/601372ac4e3f98d502c707bf841589fbc48a3a7d/src/event.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:81820372707ab9762b38dcc93bc3a2ad -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/madrobby/zepto/blob/1.1-stable/src/event.js"
               data-name="1.1-stable"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="1.1-stable">
                1.1-stable
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/madrobby/zepto/blob/benchmark/src/event.js"
               data-name="benchmark"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="benchmark">
                benchmark
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/madrobby/zepto/blob/gh-pages/src/event.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/madrobby/zepto/blob/master/src/event.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/madrobby/zepto/blob/mocha/src/event.js"
               data-name="mocha"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="mocha">
                mocha
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/madrobby/zepto/blob/remove-load-shortcut/src/event.js"
               data-name="remove-load-shortcut"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="remove-load-shortcut">
                remove-load-shortcut
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.1.6/src/event.js"
              data-name="v1.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.6">
                v1.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.1.5/src/event.js"
              data-name="v1.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.5">
                v1.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.1.4/src/event.js"
              data-name="v1.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.4">
                v1.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.1.3/src/event.js"
              data-name="v1.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.3">
                v1.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.1.2/src/event.js"
              data-name="v1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.2">
                v1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.1.1/src/event.js"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.1.0/src/event.js"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.0/src/event.js"
              data-name="v1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.0">
                v1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.0rc1/src/event.js"
              data-name="v1.0rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.0rc1">
                v1.0rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.8/src/event.js"
              data-name="v0.8"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.8">
                v0.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.7/src/event.js"
              data-name="v0.7"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.7">
                v0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.6/src/event.js"
              data-name="v0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.6">
                v0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.5/src/event.js"
              data-name="v0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.5">
                v0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.4/src/event.js"
              data-name="v0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.4">
                v0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.3/src/event.js"
              data-name="v0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.3">
                v0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.2/src/event.js"
              data-name="v0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.2">
                v0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.1.1/src/event.js"
              data-name="v0.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.1">
                v0.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.1/src/event.js"
              data-name="v0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.1">
                v0.1
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/madrobby/zepto/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/madrobby/zepto" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">zepto</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/madrobby/zepto/tree/master/src" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator">/</span><strong class="final-path">event.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/madrobby/zepto/commit/601372ac4e3f98d502c707bf841589fbc48a3a7d" data-pjax>
          601372a
        </a>
        <time datetime="2015-12-31T13:53:03Z" is="relative-time">Dec 31, 2015</time>
      </span>
      <div>
        <img alt="@madrobby" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/3390?v=3&amp;s=40" width="20" />
        <a href="/madrobby" class="user-mention" rel="author">madrobby</a>
          <a href="/madrobby/zepto/commit/601372ac4e3f98d502c707bf841589fbc48a3a7d" class="message" data-pjax="true" title="🎉 Happy new year!">🎉 Happy new year!</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>22</strong>
         contributors
      </a>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="mislav" href="/madrobby/zepto/commits/master/src/event.js?author=mislav"><img alt="@mislav" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/887?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="madrobby" href="/madrobby/zepto/commits/master/src/event.js?author=madrobby"><img alt="@madrobby" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/3390?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="sstephenson" href="/madrobby/zepto/commits/master/src/event.js?author=sstephenson"><img alt="@sstephenson" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/2603?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="kossnocorp" href="/madrobby/zepto/commits/master/src/event.js?author=kossnocorp"><img alt="@kossnocorp" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/52201?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="andyjansson" href="/madrobby/zepto/commits/master/src/event.js?author=andyjansson"><img alt="@andyjansson" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1737375?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="joelambert" href="/madrobby/zepto/commits/master/src/event.js?author=joelambert"><img alt="@joelambert" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/644362?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ffdead" href="/madrobby/zepto/commits/master/src/event.js?author=ffdead"><img alt="@ffdead" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/420472?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ekhaled" href="/madrobby/zepto/commits/master/src/event.js?author=ekhaled"><img alt="@ekhaled" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/198751?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="karolk" href="/madrobby/zepto/commits/master/src/event.js?author=karolk"><img alt="@karolk" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/224933?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ZDroid" href="/madrobby/zepto/commits/master/src/event.js?author=ZDroid"><img alt="@ZDroid" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/2725611?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="marioestrada" href="/madrobby/zepto/commits/master/src/event.js?author=marioestrada"><img alt="@marioestrada" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/47727?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="philnash" href="/madrobby/zepto/commits/master/src/event.js?author=philnash"><img alt="@philnash" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/31462?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="juhovh" href="/madrobby/zepto/commits/master/src/event.js?author=juhovh"><img alt="@juhovh" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/262958?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="johnboxall" href="/madrobby/zepto/commits/master/src/event.js?author=johnboxall"><img alt="@johnboxall" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/28967?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rafbm" href="/madrobby/zepto/commits/master/src/event.js?author=rafbm"><img alt="@rafbm" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/166943?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Candid" href="/madrobby/zepto/commits/master/src/event.js?author=Candid"><img alt="@Candid" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/882970?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="elgerlambert" href="/madrobby/zepto/commits/master/src/event.js?author=elgerlambert"><img alt="@elgerlambert" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1628796?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="motdotla" href="/madrobby/zepto/commits/master/src/event.js?author=motdotla"><img alt="@motdotla" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/3848?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="altbdoor" href="/madrobby/zepto/commits/master/src/event.js?author=altbdoor"><img alt="@altbdoor" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/3540471?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="arextar" href="/madrobby/zepto/commits/master/src/event.js?author=arextar"><img alt="@arextar" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/581730?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="andregoncalves" href="/madrobby/zepto/commits/master/src/event.js?author=andregoncalves"><img alt="@andregoncalves" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1074?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="atrl" href="/madrobby/zepto/commits/master/src/event.js?author=atrl"><img alt="@atrl" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/987631?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@mislav" height="24" src="https://avatars3.githubusercontent.com/u/887?v=3&amp;s=48" width="24" />
            <a href="/mislav">mislav</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@madrobby" height="24" src="https://avatars2.githubusercontent.com/u/3390?v=3&amp;s=48" width="24" />
            <a href="/madrobby">madrobby</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@sstephenson" height="24" src="https://avatars1.githubusercontent.com/u/2603?v=3&amp;s=48" width="24" />
            <a href="/sstephenson">sstephenson</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kossnocorp" height="24" src="https://avatars3.githubusercontent.com/u/52201?v=3&amp;s=48" width="24" />
            <a href="/kossnocorp">kossnocorp</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@andyjansson" height="24" src="https://avatars2.githubusercontent.com/u/1737375?v=3&amp;s=48" width="24" />
            <a href="/andyjansson">andyjansson</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@joelambert" height="24" src="https://avatars3.githubusercontent.com/u/644362?v=3&amp;s=48" width="24" />
            <a href="/joelambert">joelambert</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ffdead" height="24" src="https://avatars1.githubusercontent.com/u/420472?v=3&amp;s=48" width="24" />
            <a href="/ffdead">ffdead</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ekhaled" height="24" src="https://avatars0.githubusercontent.com/u/198751?v=3&amp;s=48" width="24" />
            <a href="/ekhaled">ekhaled</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@karolk" height="24" src="https://avatars3.githubusercontent.com/u/224933?v=3&amp;s=48" width="24" />
            <a href="/karolk">karolk</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ZDroid" height="24" src="https://avatars0.githubusercontent.com/u/2725611?v=3&amp;s=48" width="24" />
            <a href="/ZDroid">ZDroid</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@marioestrada" height="24" src="https://avatars0.githubusercontent.com/u/47727?v=3&amp;s=48" width="24" />
            <a href="/marioestrada">marioestrada</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@philnash" height="24" src="https://avatars3.githubusercontent.com/u/31462?v=3&amp;s=48" width="24" />
            <a href="/philnash">philnash</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@juhovh" height="24" src="https://avatars1.githubusercontent.com/u/262958?v=3&amp;s=48" width="24" />
            <a href="/juhovh">juhovh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@johnboxall" height="24" src="https://avatars3.githubusercontent.com/u/28967?v=3&amp;s=48" width="24" />
            <a href="/johnboxall">johnboxall</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rafbm" height="24" src="https://avatars1.githubusercontent.com/u/166943?v=3&amp;s=48" width="24" />
            <a href="/rafbm">rafbm</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Candid" height="24" src="https://avatars2.githubusercontent.com/u/882970?v=3&amp;s=48" width="24" />
            <a href="/Candid">Candid</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@elgerlambert" height="24" src="https://avatars3.githubusercontent.com/u/1628796?v=3&amp;s=48" width="24" />
            <a href="/elgerlambert">elgerlambert</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@motdotla" height="24" src="https://avatars3.githubusercontent.com/u/3848?v=3&amp;s=48" width="24" />
            <a href="/motdotla">motdotla</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@altbdoor" height="24" src="https://avatars1.githubusercontent.com/u/3540471?v=3&amp;s=48" width="24" />
            <a href="/altbdoor">altbdoor</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@arextar" height="24" src="https://avatars0.githubusercontent.com/u/581730?v=3&amp;s=48" width="24" />
            <a href="/arextar">arextar</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@andregoncalves" height="24" src="https://avatars1.githubusercontent.com/u/1074?v=3&amp;s=48" width="24" />
            <a href="/andregoncalves">andregoncalves</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@atrl" height="24" src="https://avatars0.githubusercontent.com/u/987631?v=3&amp;s=48" width="24" />
            <a href="/atrl">atrl</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/madrobby/zepto/raw/master/src/event.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/madrobby/zepto/blame/master/src/event.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/madrobby/zepto/commits/master/src/event.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span aria-hidden="true" class="octicon octicon-device-desktop"></span>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span aria-hidden="true" class="octicon octicon-pencil"></span>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span aria-hidden="true" class="octicon octicon-trashcan"></span>
        </button>
  </div>

  <div class="file-info">
      274 lines (242 sloc)
      <span class="file-info-divider"></span>
    9.25 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">//     Zepto.js</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">//     (c) 2010-2016 Thomas Fuchs</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">//     Zepto.js may be freely distributed under the MIT license.</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">;(<span class="pl-k">function</span>(<span class="pl-smi">$</span>){</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> _zid <span class="pl-k">=</span> <span class="pl-c1">1</span>, <span class="pl-c1">undefined</span>,</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">      slice <span class="pl-k">=</span> <span class="pl-smi">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slice</span>,</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">      isFunction <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-smi">isFunction</span>,</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">isString</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>){ <span class="pl-k">return</span> <span class="pl-k">typeof</span> obj <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> },</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">      handlers <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">      specialEvents<span class="pl-k">=</span>{},</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">      focusinSupported <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>onfocusin<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> <span class="pl-c1">window</span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">      focus <span class="pl-k">=</span> { focus<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>focusin<span class="pl-pds">&#39;</span></span>, blur<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>focusout<span class="pl-pds">&#39;</span></span> },</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">      hover <span class="pl-k">=</span> { mouseenter<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>mouseover<span class="pl-pds">&#39;</span></span>, mouseleave<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>mouseout<span class="pl-pds">&#39;</span></span> }</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">specialEvents</span>.<span class="pl-smi">click</span> <span class="pl-k">=</span> <span class="pl-smi">specialEvents</span>.<span class="pl-smi">mousedown</span> <span class="pl-k">=</span> <span class="pl-smi">specialEvents</span>.<span class="pl-smi">mouseup</span> <span class="pl-k">=</span> <span class="pl-smi">specialEvents</span>.<span class="pl-smi">mousemove</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>MouseEvents<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">zid</span>(<span class="pl-smi">element</span>) {</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">element</span>.<span class="pl-smi">_zid</span> <span class="pl-k">||</span> (<span class="pl-smi">element</span>.<span class="pl-smi">_zid</span> <span class="pl-k">=</span> _zid<span class="pl-k">++</span>)</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">findHandlers</span>(<span class="pl-smi">element</span>, <span class="pl-smi">event</span>, <span class="pl-smi">fn</span>, <span class="pl-smi">selector</span>) {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">event</span> <span class="pl-k">=</span> <span class="pl-c1">parse</span>(<span class="pl-c1">event</span>)</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">event</span>.<span class="pl-smi">ns</span>) <span class="pl-k">var</span> matcher <span class="pl-k">=</span> <span class="pl-en">matcherFor</span>(<span class="pl-smi">event</span>.<span class="pl-smi">ns</span>)</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> (handlers[<span class="pl-en">zid</span>(element)] <span class="pl-k">||</span> []).<span class="pl-en">filter</span>(<span class="pl-k">function</span>(<span class="pl-smi">handler</span>) {</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> handler</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">!</span><span class="pl-smi">event</span>.<span class="pl-smi">e</span>  <span class="pl-k">||</span> <span class="pl-smi">handler</span>.<span class="pl-smi">e</span> <span class="pl-k">==</span> <span class="pl-smi">event</span>.<span class="pl-smi">e</span>)</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">!</span><span class="pl-smi">event</span>.<span class="pl-smi">ns</span> <span class="pl-k">||</span> <span class="pl-smi">matcher</span>.<span class="pl-c1">test</span>(<span class="pl-smi">handler</span>.<span class="pl-smi">ns</span>))</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">!</span>fn       <span class="pl-k">||</span> <span class="pl-en">zid</span>(<span class="pl-smi">handler</span>.<span class="pl-smi">fn</span>) <span class="pl-k">===</span> <span class="pl-en">zid</span>(fn))</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">!</span>selector <span class="pl-k">||</span> <span class="pl-smi">handler</span>.<span class="pl-smi">sel</span> <span class="pl-k">==</span> selector)</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">parse</span>(<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> parts <span class="pl-k">=</span> (<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">event</span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> {e<span class="pl-k">:</span> parts[<span class="pl-c1">0</span>], ns<span class="pl-k">:</span> <span class="pl-smi">parts</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">1</span>).<span class="pl-c1">sort</span>().<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>)}</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">matcherFor</span>(<span class="pl-smi">ns</span>) {</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>(?:^| )<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ns</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span> .* ?<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>(?: |$)<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">eventCapture</span>(<span class="pl-smi">handler</span>, <span class="pl-smi">captureSetting</span>) {</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">handler</span>.<span class="pl-smi">del</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">      (<span class="pl-k">!</span>focusinSupported <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">handler</span>.<span class="pl-smi">e</span> <span class="pl-k">in</span> focus)) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">!!</span>captureSetting</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">realEvent</span>(<span class="pl-smi">type</span>) {</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> hover[type] <span class="pl-k">||</span> (focusinSupported <span class="pl-k">&amp;&amp;</span> focus[type]) <span class="pl-k">||</span> type</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">add</span>(<span class="pl-smi">element</span>, <span class="pl-smi">events</span>, <span class="pl-smi">fn</span>, <span class="pl-smi">data</span>, <span class="pl-smi">selector</span>, <span class="pl-smi">delegator</span>, <span class="pl-smi">capture</span>){</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> id <span class="pl-k">=</span> <span class="pl-en">zid</span>(element), set <span class="pl-k">=</span> (handlers[id] <span class="pl-k">||</span> (handlers[id] <span class="pl-k">=</span> []))</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">events</span>.<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-pds">/</span></span>).<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">event</span>){</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-c1">event</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ready<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span> <span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">ready</span>(fn)</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> handler   <span class="pl-k">=</span> <span class="pl-c1">parse</span>(<span class="pl-c1">event</span>)</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">handler</span>.<span class="pl-smi">fn</span>    <span class="pl-k">=</span> fn</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">handler</span>.<span class="pl-smi">sel</span>   <span class="pl-k">=</span> selector</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// emulate mouseenter, mouseleave</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">handler</span>.<span class="pl-smi">e</span> <span class="pl-k">in</span> hover) <span class="pl-en">fn</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> related <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-smi">relatedTarget</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>related <span class="pl-k">||</span> (related <span class="pl-k">!==</span> <span class="pl-v">this</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">$</span>.<span class="pl-en">contains</span>(<span class="pl-v">this</span>, related)))</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-smi">handler</span>.<span class="pl-smi">fn</span>.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, arguments)</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">handler</span>.<span class="pl-smi">del</span>   <span class="pl-k">=</span> delegator</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> callback  <span class="pl-k">=</span> delegator <span class="pl-k">||</span> fn</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">handler</span>.<span class="pl-en">proxy</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">        e <span class="pl-k">=</span> <span class="pl-en">compatible</span>(e)</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-en">isImmediatePropagationStopped</span>()) <span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">e</span>.<span class="pl-c1">data</span> <span class="pl-k">=</span> data</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> result <span class="pl-k">=</span> <span class="pl-smi">callback</span>.<span class="pl-c1">apply</span>(element, <span class="pl-smi">e</span>.<span class="pl-smi">_args</span> <span class="pl-k">==</span> <span class="pl-c1">undefined</span> <span class="pl-k">?</span> [e] <span class="pl-k">:</span> [e].<span class="pl-c1">concat</span>(<span class="pl-smi">e</span>.<span class="pl-smi">_args</span>))</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (result <span class="pl-k">===</span> <span class="pl-c1">false</span>) <span class="pl-smi">e</span>.<span class="pl-en">preventDefault</span>(), <span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>()</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> result</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">handler</span>.<span class="pl-smi">i</span> <span class="pl-k">=</span> <span class="pl-smi">set</span>.<span class="pl-c1">length</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">set</span>.<span class="pl-c1">push</span>(handler)</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-s"><span class="pl-pds">&#39;</span>addEventListener<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> element)</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">element</span>.<span class="pl-en">addEventListener</span>(<span class="pl-en">realEvent</span>(<span class="pl-smi">handler</span>.<span class="pl-smi">e</span>), <span class="pl-smi">handler</span>.<span class="pl-smi">proxy</span>, <span class="pl-en">eventCapture</span>(handler, capture))</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">remove</span>(<span class="pl-smi">element</span>, <span class="pl-smi">events</span>, <span class="pl-smi">fn</span>, <span class="pl-smi">selector</span>, <span class="pl-smi">capture</span>){</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> id <span class="pl-k">=</span> <span class="pl-en">zid</span>(element)</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">    ;(events <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-pds">/</span></span>).<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">event</span>){</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">findHandlers</span>(element, <span class="pl-c1">event</span>, fn, selector).<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">handler</span>){</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">delete</span> handlers[id][<span class="pl-smi">handler</span>.<span class="pl-smi">i</span>]</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-s"><span class="pl-pds">&#39;</span>removeEventListener<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> element)</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">element</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-en">realEvent</span>(<span class="pl-smi">handler</span>.<span class="pl-smi">e</span>), <span class="pl-smi">handler</span>.<span class="pl-smi">proxy</span>, <span class="pl-en">eventCapture</span>(handler, capture))</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">$</span>.<span class="pl-c1">event</span> <span class="pl-k">=</span> { add<span class="pl-k">:</span> add, remove<span class="pl-k">:</span> remove }</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$</span>.<span class="pl-en">proxy</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">fn</span>, <span class="pl-smi">context</span>) {</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> args <span class="pl-k">=</span> (<span class="pl-c1">2</span> <span class="pl-k">in</span> arguments) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(arguments, <span class="pl-c1">2</span>)</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">isFunction</span>(fn)) {</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> <span class="pl-en">proxyFn</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(){ <span class="pl-k">return</span> <span class="pl-smi">fn</span>.<span class="pl-c1">apply</span>(context, args <span class="pl-k">?</span> <span class="pl-smi">args</span>.<span class="pl-c1">concat</span>(<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(arguments)) <span class="pl-k">:</span> arguments) }</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">proxyFn</span>.<span class="pl-smi">_zid</span> <span class="pl-k">=</span> <span class="pl-en">zid</span>(fn)</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> proxyFn</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-en">isString</span>(context)) {</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (args) {</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">args</span>.<span class="pl-c1">unshift</span>(fn[context], fn)</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-smi">proxy</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>, args)</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">proxy</span>(fn[context], fn)</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">TypeError</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>expected function<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">bind</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>, <span class="pl-smi">data</span>, <span class="pl-smi">callback</span>){</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">on</span>(<span class="pl-c1">event</span>, data, callback)</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">unbind</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>, <span class="pl-smi">callback</span>){</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">off</span>(<span class="pl-c1">event</span>, callback)</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">one</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>, <span class="pl-smi">selector</span>, <span class="pl-smi">data</span>, <span class="pl-smi">callback</span>){</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">on</span>(<span class="pl-c1">event</span>, selector, data, callback, <span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">returnTrue</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">true</span>},</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">returnFalse</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(){<span class="pl-k">return</span> <span class="pl-c1">false</span>},</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">      ignoreProperties <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(<span class="pl-c1">[<span class="pl-c1">A-Z</span>]</span><span class="pl-k">|</span>returnValue<span class="pl-k">$</span><span class="pl-k">|</span>layer<span class="pl-c1">[XY]</span><span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">      eventMethods <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">        preventDefault<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>isDefaultPrevented<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">        stopImmediatePropagation<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>isImmediatePropagationStopped<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">        stopPropagation<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>isPropagationStopped<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">compatible</span>(<span class="pl-smi">event</span>, <span class="pl-smi">source</span>) {</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (source <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">event</span>.<span class="pl-smi">isDefaultPrevented</span>) {</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">      source <span class="pl-k">||</span> (source <span class="pl-k">=</span> <span class="pl-c1">event</span>)</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">$</span>.<span class="pl-en">each</span>(eventMethods, <span class="pl-k">function</span>(<span class="pl-smi">name</span>, <span class="pl-smi">predicate</span>) {</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> sourceMethod <span class="pl-k">=</span> source[name]</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">event</span>[name] <span class="pl-k">=</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">          <span class="pl-v">this</span>[predicate] <span class="pl-k">=</span> returnTrue</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> sourceMethod <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">sourceMethod</span>.<span class="pl-c1">apply</span>(source, arguments)</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">event</span>[predicate] <span class="pl-k">=</span> returnFalse</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">source</span>.<span class="pl-smi">defaultPrevented</span> <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">?</span> <span class="pl-smi">source</span>.<span class="pl-smi">defaultPrevented</span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">          <span class="pl-s"><span class="pl-pds">&#39;</span>returnValue<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> source <span class="pl-k">?</span> <span class="pl-smi">source</span>.<span class="pl-smi">returnValue</span> <span class="pl-k">===</span> false <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">source</span>.<span class="pl-smi">getPreventDefault</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">source</span>.<span class="pl-en">getPreventDefault</span>())</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">event</span>.<span class="pl-smi">isDefaultPrevented</span> <span class="pl-k">=</span> returnTrue</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">event</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">createProxy</span>(<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> key, proxy <span class="pl-k">=</span> { originalEvent<span class="pl-k">:</span> <span class="pl-c1">event</span> }</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (key <span class="pl-k">in</span> <span class="pl-c1">event</span>)</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">ignoreProperties</span>.<span class="pl-c1">test</span>(key) <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">event</span>[key] <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) proxy[key] <span class="pl-k">=</span> <span class="pl-c1">event</span>[key]</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">compatible</span>(proxy, <span class="pl-c1">event</span>)</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">delegate</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">selector</span>, <span class="pl-smi">event</span>, <span class="pl-smi">callback</span>){</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">on</span>(<span class="pl-c1">event</span>, selector, callback)</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">undelegate</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">selector</span>, <span class="pl-smi">event</span>, <span class="pl-smi">callback</span>){</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">off</span>(<span class="pl-c1">event</span>, selector, callback)</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">live</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>, <span class="pl-smi">callback</span>){</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-smi">document</span>.<span class="pl-c1">body</span>).<span class="pl-en">delegate</span>(<span class="pl-v">this</span>.<span class="pl-smi">selector</span>, <span class="pl-c1">event</span>, callback)</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">die</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>, <span class="pl-smi">callback</span>){</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-smi">document</span>.<span class="pl-c1">body</span>).<span class="pl-en">undelegate</span>(<span class="pl-v">this</span>.<span class="pl-smi">selector</span>, <span class="pl-c1">event</span>, callback)</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">on</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>, <span class="pl-smi">selector</span>, <span class="pl-smi">data</span>, <span class="pl-smi">callback</span>, <span class="pl-smi">one</span>){</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> autoRemove, delegator, $<span class="pl-v">this</span> <span class="pl-k">=</span> <span class="pl-v">this</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">event</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-en">isString</span>(<span class="pl-c1">event</span>)) {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-c1">event</span>, <span class="pl-k">function</span>(<span class="pl-smi">type</span>, <span class="pl-smi">fn</span>){</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$this</span>.<span class="pl-en">on</span>(type, selector, data, fn, one)</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> $<span class="pl-v">this</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">isString</span>(selector) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-en">isFunction</span>(callback) <span class="pl-k">&amp;&amp;</span> callback <span class="pl-k">!==</span> <span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">      callback <span class="pl-k">=</span> data, data <span class="pl-k">=</span> selector, selector <span class="pl-k">=</span> <span class="pl-c1">undefined</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (callback <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> data <span class="pl-k">===</span> <span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">      callback <span class="pl-k">=</span> data, data <span class="pl-k">=</span> <span class="pl-c1">undefined</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (callback <span class="pl-k">===</span> <span class="pl-c1">false</span>) callback <span class="pl-k">=</span> returnFalse</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">$this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">_</span>, <span class="pl-smi">element</span>){</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (one) <span class="pl-en">autoRemove</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">remove</span>(element, <span class="pl-smi">e</span>.<span class="pl-c1">type</span>, callback)</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">callback</span>.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, arguments)</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (selector) <span class="pl-en">delegator</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> evt, match <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-smi">e</span>.<span class="pl-c1">target</span>).<span class="pl-en">closest</span>(selector, element).<span class="pl-en">get</span>(<span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (match <span class="pl-k">&amp;&amp;</span> match <span class="pl-k">!==</span> element) {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">          evt <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>(<span class="pl-en">createProxy</span>(e), {currentTarget<span class="pl-k">:</span> match, liveFired<span class="pl-k">:</span> element})</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> (autoRemove <span class="pl-k">||</span> callback).<span class="pl-c1">apply</span>(match, [evt].<span class="pl-c1">concat</span>(<span class="pl-smi">slice</span>.<span class="pl-c1">call</span>(arguments, <span class="pl-c1">1</span>)))</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">add</span>(element, <span class="pl-c1">event</span>, callback, data, selector, delegator <span class="pl-k">||</span> autoRemove)</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">off</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>, <span class="pl-smi">selector</span>, <span class="pl-smi">callback</span>){</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> $<span class="pl-v">this</span> <span class="pl-k">=</span> <span class="pl-v">this</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">event</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-en">isString</span>(<span class="pl-c1">event</span>)) {</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-c1">event</span>, <span class="pl-k">function</span>(<span class="pl-smi">type</span>, <span class="pl-smi">fn</span>){</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$this</span>.<span class="pl-en">off</span>(type, selector, fn)</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> $<span class="pl-v">this</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">isString</span>(selector) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-en">isFunction</span>(callback) <span class="pl-k">&amp;&amp;</span> callback <span class="pl-k">!==</span> <span class="pl-c1">false</span>)</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">      callback <span class="pl-k">=</span> selector, selector <span class="pl-k">=</span> <span class="pl-c1">undefined</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (callback <span class="pl-k">===</span> <span class="pl-c1">false</span>) callback <span class="pl-k">=</span> returnFalse</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">$this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">remove</span>(<span class="pl-v">this</span>, <span class="pl-c1">event</span>, callback, selector)</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">trigger</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>, <span class="pl-smi">args</span>){</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">event</span> <span class="pl-k">=</span> (<span class="pl-en">isString</span>(<span class="pl-c1">event</span>) <span class="pl-k">||</span> <span class="pl-smi">$</span>.<span class="pl-en">isPlainObject</span>(<span class="pl-c1">event</span>)) <span class="pl-k">?</span> <span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-c1">event</span>) <span class="pl-k">:</span> <span class="pl-en">compatible</span>(<span class="pl-c1">event</span>)</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">event</span>.<span class="pl-smi">_args</span> <span class="pl-k">=</span> args</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// handle focus(), blur() by calling them directly</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">event</span>.<span class="pl-c1">type</span> <span class="pl-k">in</span> focus <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-v">this</span>[<span class="pl-smi">event</span>.<span class="pl-c1">type</span>] <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) <span class="pl-v">this</span>[<span class="pl-smi">event</span>.<span class="pl-c1">type</span>]()</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// items in the collection might not be DOM elements</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-s"><span class="pl-pds">&#39;</span>dispatchEvent<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> <span class="pl-v">this</span>) <span class="pl-v">this</span>.<span class="pl-en">dispatchEvent</span>(<span class="pl-c1">event</span>)</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">else</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">triggerHandler</span>(<span class="pl-c1">event</span>, args)</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// triggers event handlers on current element just as if an event occurred,</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// doesn&#39;t trigger an actual event, doesn&#39;t bubble</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$.fn</span>.<span class="pl-en">triggerHandler</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">event</span>, <span class="pl-smi">args</span>){</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> e, result</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">    <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">element</span>){</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">      e <span class="pl-k">=</span> <span class="pl-en">createProxy</span>(<span class="pl-en">isString</span>(<span class="pl-c1">event</span>) <span class="pl-k">?</span> <span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-c1">event</span>) <span class="pl-k">:</span> <span class="pl-c1">event</span>)</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">e</span>.<span class="pl-smi">_args</span> <span class="pl-k">=</span> args</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">e</span>.<span class="pl-c1">target</span> <span class="pl-k">=</span> element</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-en">findHandlers</span>(element, <span class="pl-smi">event</span>.<span class="pl-c1">type</span> <span class="pl-k">||</span> <span class="pl-c1">event</span>), <span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">handler</span>){</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">        result <span class="pl-k">=</span> <span class="pl-smi">handler</span>.<span class="pl-en">proxy</span>(e)</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-en">isImmediatePropagationStopped</span>()) <span class="pl-k">return</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">    })</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> result</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// shortcut methods for `.bind(event, fn)` for each event type</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">  ;(<span class="pl-s"><span class="pl-pds">&#39;</span>focusin focusout focus blur load resize scroll unload click dblclick <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave <span class="pl-pds">&#39;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">  <span class="pl-s"><span class="pl-pds">&#39;</span>change select keydown keypress keyup error<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>).<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>[<span class="pl-c1">event</span>] <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> (<span class="pl-c1">0</span> <span class="pl-k">in</span> arguments) <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">this</span>.<span class="pl-en">bind</span>(<span class="pl-c1">event</span>, callback) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">this</span>.<span class="pl-en">trigger</span>(<span class="pl-c1">event</span>)</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">  })</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">$</span>.<span class="pl-en">Event</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">type</span>, <span class="pl-smi">props</span>) {</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-en">isString</span>(type)) props <span class="pl-k">=</span> type, type <span class="pl-k">=</span> <span class="pl-smi">props</span>.<span class="pl-c1">type</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-c1">event</span> <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-en">createEvent</span>(specialEvents[type] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Events<span class="pl-pds">&#39;</span></span>), bubbles <span class="pl-k">=</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (props) <span class="pl-k">for</span> (<span class="pl-k">var</span> name <span class="pl-k">in</span> props) (name <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bubbles<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> (bubbles <span class="pl-k">=</span> <span class="pl-k">!!</span>props[name]) <span class="pl-k">:</span> (<span class="pl-c1">event</span>[name] <span class="pl-k">=</span> props[name])</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">event</span>.<span class="pl-en">initEvent</span>(type, bubbles, <span class="pl-c1">true</span>)</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">compatible</span>(<span class="pl-c1">event</span>)</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">})(Zepto)</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span aria-hidden="true" class="mega-octicon octicon-mark-github" title="GitHub "></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.14168s from github-fe144-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span aria-hidden="true" class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span aria-hidden="true" class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span aria-hidden="true" class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <span aria-hidden="true" class="octicon octicon-x"></span>
    </button>
  </div>
</div>

  </body>
</html>

