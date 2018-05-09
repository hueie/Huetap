



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>zepto/touch.js at master · madrobby/zepto · GitHub</title>
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

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="7BD42BF0:3ACD:155C459:56A03DD5" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="662d588699d2ca16b217e34a35b23217b872282f" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-e64d783fc73cc815bb639b1ee740d83c08b1a72e2955dbd871b5971946f6f73d.css" integrity="sha256-5k14P8c8yBW7Y5se50DYPAixpy4pVdvYcbWXGUb29z0=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-d67e665a5adcb4911576562cbeb82c00d697b1f31e846c253fec048877a6b457.css" integrity="sha256-1n5mWlrctJEVdlYsvrgsANaXsfMehGwlP+wEiHemtFc=" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="5360bf34e00996a095e844e73e40b165">

      
  <meta name="description" content="zepto - Zepto.js is a minimalist JavaScript library for modern browsers, with a jQuery-compatible API">
  <meta name="go-import" content="github.com/madrobby/zepto git https://github.com/madrobby/zepto.git">

  <meta content="3390" name="octolytics-dimension-user_id" /><meta content="madrobby" name="octolytics-dimension-user_login" /><meta content="924303" name="octolytics-dimension-repository_id" /><meta content="madrobby/zepto" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="924303" name="octolytics-dimension-repository_network_root_id" /><meta content="madrobby/zepto" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/madrobby/zepto/commits/master.atom" rel="alternate" title="Recent Commits to zepto:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/madrobby/zepto/blob/master/src/touch.js" data-pjax-transient>
  </head>


  <body class="logged_out   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span aria-hidden="true" class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fmadrobby%2Fzepto%2Fblob%2Fmaster%2Fsrc%2Ftouch.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
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
      9,948
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

    

<a href="/madrobby/zepto/blob/601372ac4e3f98d502c707bf841589fbc48a3a7d/src/touch.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:914e63cc142c21fa0006762a3f935c74 -->

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
               href="/madrobby/zepto/blob/1.1-stable/src/touch.js"
               data-name="1.1-stable"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="1.1-stable">
                1.1-stable
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/madrobby/zepto/blob/benchmark/src/touch.js"
               data-name="benchmark"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="benchmark">
                benchmark
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/madrobby/zepto/blob/gh-pages/src/touch.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/madrobby/zepto/blob/master/src/touch.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/madrobby/zepto/blob/mocha/src/touch.js"
               data-name="mocha"
               data-skip-pjax="true"
               rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="mocha">
                mocha
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/madrobby/zepto/blob/remove-load-shortcut/src/touch.js"
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
              href="/madrobby/zepto/tree/v1.1.6/src/touch.js"
              data-name="v1.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.6">
                v1.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.1.5/src/touch.js"
              data-name="v1.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.5">
                v1.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.1.4/src/touch.js"
              data-name="v1.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.4">
                v1.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.1.3/src/touch.js"
              data-name="v1.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.3">
                v1.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.1.2/src/touch.js"
              data-name="v1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.2">
                v1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.1.1/src/touch.js"
              data-name="v1.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.1">
                v1.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.1.0/src/touch.js"
              data-name="v1.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.1.0">
                v1.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.0/src/touch.js"
              data-name="v1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.0">
                v1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v1.0rc1/src/touch.js"
              data-name="v1.0rc1"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v1.0rc1">
                v1.0rc1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.8/src/touch.js"
              data-name="v0.8"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.8">
                v0.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.7/src/touch.js"
              data-name="v0.7"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.7">
                v0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.6/src/touch.js"
              data-name="v0.6"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.6">
                v0.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.5/src/touch.js"
              data-name="v0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.5">
                v0.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.4/src/touch.js"
              data-name="v0.4"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.4">
                v0.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.3/src/touch.js"
              data-name="v0.3"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.3">
                v0.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.2/src/touch.js"
              data-name="v0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.2">
                v0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.1.1/src/touch.js"
              data-name="v0.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <span aria-hidden="true" class="octicon octicon-check select-menu-item-icon"></span>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.1">
                v0.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/madrobby/zepto/tree/v0.1/src/touch.js"
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
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/madrobby/zepto" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">zepto</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/madrobby/zepto/tree/master/src" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator">/</span><strong class="final-path">touch.js</strong>
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
        <strong>17</strong>
         contributors
      </a>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="madrobby" href="/madrobby/zepto/commits/master/src/touch.js?author=madrobby"><img alt="@madrobby" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/3390?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="hunterloftis" href="/madrobby/zepto/commits/master/src/touch.js?author=hunterloftis"><img alt="@hunterloftis" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/364501?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="charsleysa" href="/madrobby/zepto/commits/master/src/touch.js?author=charsleysa"><img alt="@charsleysa" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1219661?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="gobhi" href="/madrobby/zepto/commits/master/src/touch.js?author=gobhi"><img alt="@gobhi" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/315663?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mislav" href="/madrobby/zepto/commits/master/src/touch.js?author=mislav"><img alt="@mislav" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/887?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="joaodubas" href="/madrobby/zepto/commits/master/src/touch.js?author=joaodubas"><img alt="@joaodubas" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/90532?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="kossnocorp" href="/madrobby/zepto/commits/master/src/touch.js?author=kossnocorp"><img alt="@kossnocorp" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/52201?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="kpdecker" href="/madrobby/zepto/commits/master/src/touch.js?author=kpdecker"><img alt="@kpdecker" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/196390?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ZDroid" href="/madrobby/zepto/commits/master/src/touch.js?author=ZDroid"><img alt="@ZDroid" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/2725611?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="riklomas" href="/madrobby/zepto/commits/master/src/touch.js?author=riklomas"><img alt="@riklomas" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/13360?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mattheworiordan" href="/madrobby/zepto/commits/master/src/touch.js?author=mattheworiordan"><img alt="@mattheworiordan" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/43789?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="sstephenson" href="/madrobby/zepto/commits/master/src/touch.js?author=sstephenson"><img alt="@sstephenson" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/2603?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="bjoernwibben" href="/madrobby/zepto/commits/master/src/touch.js?author=bjoernwibben"><img alt="@bjoernwibben" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/376722?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="juandopazo" href="/madrobby/zepto/commits/master/src/touch.js?author=juandopazo"><img alt="@juandopazo" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/347002?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="davidkaneda" href="/madrobby/zepto/commits/master/src/touch.js?author=davidkaneda"><img alt="@davidkaneda" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/21713?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="danjordan" href="/madrobby/zepto/commits/master/src/touch.js?author=danjordan"><img alt="@danjordan" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/182101?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tobibo" href="/madrobby/zepto/commits/master/src/touch.js?author=tobibo"><img alt="@tobibo" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/323544?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@madrobby" height="24" src="https://avatars2.githubusercontent.com/u/3390?v=3&amp;s=48" width="24" />
            <a href="/madrobby">madrobby</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@hunterloftis" height="24" src="https://avatars1.githubusercontent.com/u/364501?v=3&amp;s=48" width="24" />
            <a href="/hunterloftis">hunterloftis</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@charsleysa" height="24" src="https://avatars2.githubusercontent.com/u/1219661?v=3&amp;s=48" width="24" />
            <a href="/charsleysa">charsleysa</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gobhi" height="24" src="https://avatars2.githubusercontent.com/u/315663?v=3&amp;s=48" width="24" />
            <a href="/gobhi">gobhi</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mislav" height="24" src="https://avatars3.githubusercontent.com/u/887?v=3&amp;s=48" width="24" />
            <a href="/mislav">mislav</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@joaodubas" height="24" src="https://avatars0.githubusercontent.com/u/90532?v=3&amp;s=48" width="24" />
            <a href="/joaodubas">joaodubas</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kossnocorp" height="24" src="https://avatars3.githubusercontent.com/u/52201?v=3&amp;s=48" width="24" />
            <a href="/kossnocorp">kossnocorp</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kpdecker" height="24" src="https://avatars2.githubusercontent.com/u/196390?v=3&amp;s=48" width="24" />
            <a href="/kpdecker">kpdecker</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ZDroid" height="24" src="https://avatars0.githubusercontent.com/u/2725611?v=3&amp;s=48" width="24" />
            <a href="/ZDroid">ZDroid</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@riklomas" height="24" src="https://avatars3.githubusercontent.com/u/13360?v=3&amp;s=48" width="24" />
            <a href="/riklomas">riklomas</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mattheworiordan" height="24" src="https://avatars1.githubusercontent.com/u/43789?v=3&amp;s=48" width="24" />
            <a href="/mattheworiordan">mattheworiordan</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@sstephenson" height="24" src="https://avatars1.githubusercontent.com/u/2603?v=3&amp;s=48" width="24" />
            <a href="/sstephenson">sstephenson</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@bjoernwibben" height="24" src="https://avatars1.githubusercontent.com/u/376722?v=3&amp;s=48" width="24" />
            <a href="/bjoernwibben">bjoernwibben</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@juandopazo" height="24" src="https://avatars1.githubusercontent.com/u/347002?v=3&amp;s=48" width="24" />
            <a href="/juandopazo">juandopazo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@davidkaneda" height="24" src="https://avatars0.githubusercontent.com/u/21713?v=3&amp;s=48" width="24" />
            <a href="/davidkaneda">davidkaneda</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@danjordan" height="24" src="https://avatars2.githubusercontent.com/u/182101?v=3&amp;s=48" width="24" />
            <a href="/danjordan">danjordan</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tobibo" height="24" src="https://avatars0.githubusercontent.com/u/323544?v=3&amp;s=48" width="24" />
            <a href="/tobibo">tobibo</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/madrobby/zepto/raw/master/src/touch.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/madrobby/zepto/blame/master/src/touch.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/madrobby/zepto/commits/master/src/touch.js" class="btn btn-sm " rel="nofollow">History</a>
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
      166 lines (145 sloc)
      <span class="file-info-divider"></span>
    5.75 KB
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
        <td id="LC6" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> touch <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">    touchTimeout, tapTimeout, swipeTimeout, longTapTimeout,</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">    longTapDelay <span class="pl-k">=</span> <span class="pl-c1">750</span>,</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">    gesture</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">swipeDirection</span>(<span class="pl-smi">x1</span>, <span class="pl-smi">x2</span>, <span class="pl-smi">y1</span>, <span class="pl-smi">y2</span>) {</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">Math</span>.<span class="pl-c1">abs</span>(x1 <span class="pl-k">-</span> x2) <span class="pl-k">&gt;=</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">Math</span>.<span class="pl-c1">abs</span>(y1 <span class="pl-k">-</span> y2) <span class="pl-k">?</span> (x1 <span class="pl-k">-</span> x2 <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Left<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Right<span class="pl-pds">&#39;</span></span>) <span class="pl-k">:</span> (y1 <span class="pl-k">-</span> y2 <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Up<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Down<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">longTap</span>() {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">    longTapTimeout <span class="pl-k">=</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">touch</span>.<span class="pl-smi">last</span>) {</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">touch</span>.<span class="pl-smi">el</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>longTap<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">      touch <span class="pl-k">=</span> {}</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">cancelLongTap</span>() {</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (longTapTimeout) <span class="pl-c1">clearTimeout</span>(longTapTimeout)</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    longTapTimeout <span class="pl-k">=</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">cancelAll</span>() {</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (touchTimeout) <span class="pl-c1">clearTimeout</span>(touchTimeout)</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (tapTimeout) <span class="pl-c1">clearTimeout</span>(tapTimeout)</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (swipeTimeout) <span class="pl-c1">clearTimeout</span>(swipeTimeout)</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (longTapTimeout) <span class="pl-c1">clearTimeout</span>(longTapTimeout)</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">    touchTimeout <span class="pl-k">=</span> tapTimeout <span class="pl-k">=</span> swipeTimeout <span class="pl-k">=</span> longTapTimeout <span class="pl-k">=</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">    touch <span class="pl-k">=</span> {}</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">isPrimaryTouch</span>(<span class="pl-smi">event</span>){</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> (<span class="pl-smi">event</span>.<span class="pl-smi">pointerType</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>touch<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">event</span>.<span class="pl-smi">pointerType</span> <span class="pl-k">==</span> <span class="pl-smi">event</span>.<span class="pl-c1">MSPOINTER_TYPE_TOUCH</span>)</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">event</span>.<span class="pl-smi">isPrimary</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">isPointerEventType</span>(<span class="pl-smi">e</span>, <span class="pl-smi">type</span>){</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> (<span class="pl-smi">e</span>.<span class="pl-c1">type</span> <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>pointer<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>type <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">e</span>.<span class="pl-c1">type</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>mspointer<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>type)</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">ready</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> now, delta, deltaX <span class="pl-k">=</span> <span class="pl-c1">0</span>, deltaY <span class="pl-k">=</span> <span class="pl-c1">0</span>, firstTouch, _isPointerType</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-s"><span class="pl-pds">&#39;</span>MSGesture<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> <span class="pl-c1">window</span>) {</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">      gesture <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">MSGesture</span>()</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">gesture</span>.<span class="pl-c1">target</span> <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">body</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-c1">document</span>)</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">bind</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>MSGestureEnd<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> swipeDirectionFromVelocity <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">e</span>.<span class="pl-smi">velocityX</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Right<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-smi">e</span>.<span class="pl-smi">velocityX</span> <span class="pl-k">&lt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Left<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-smi">e</span>.<span class="pl-smi">velocityY</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Down<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-smi">e</span>.<span class="pl-smi">velocityY</span> <span class="pl-k">&lt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Up<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (swipeDirectionFromVelocity) {</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">touch</span>.<span class="pl-smi">el</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>swipe<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">touch</span>.<span class="pl-smi">el</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>swipe<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span> swipeDirectionFromVelocity)</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>touchstart MSPointerDown pointerdown<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>((_isPointerType <span class="pl-k">=</span> <span class="pl-en">isPointerEventType</span>(e, <span class="pl-s"><span class="pl-pds">&#39;</span>down<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">!</span><span class="pl-en">isPrimaryTouch</span>(e)) <span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">        firstTouch <span class="pl-k">=</span> _isPointerType <span class="pl-k">?</span> e <span class="pl-k">:</span> <span class="pl-smi">e</span>.<span class="pl-smi">touches</span>[<span class="pl-c1">0</span>]</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-smi">touches</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">e</span>.<span class="pl-smi">touches</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">touch</span>.<span class="pl-smi">x2</span>) {</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">// Clear out touch movement data if we have it sticking around</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">// This can occur if touchcancel doesn&#39;t fire due to preventDefault, etc.</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">touch</span>.<span class="pl-smi">x2</span> <span class="pl-k">=</span> <span class="pl-c1">undefined</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">touch</span>.<span class="pl-smi">y2</span> <span class="pl-k">=</span> <span class="pl-c1">undefined</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">        now <span class="pl-k">=</span> <span class="pl-smi">Date</span>.<span class="pl-en">now</span>()</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">        delta <span class="pl-k">=</span> now <span class="pl-k">-</span> (<span class="pl-smi">touch</span>.<span class="pl-smi">last</span> <span class="pl-k">||</span> now)</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">touch</span>.<span class="pl-smi">el</span> <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>tagName<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> <span class="pl-smi">firstTouch</span>.<span class="pl-c1">target</span> <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">firstTouch</span>.<span class="pl-c1">target</span> <span class="pl-k">:</span> <span class="pl-smi">firstTouch</span>.<span class="pl-c1">target</span>.<span class="pl-c1">parentNode</span>)</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">        touchTimeout <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">clearTimeout</span>(touchTimeout)</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">touch</span>.<span class="pl-smi">x1</span> <span class="pl-k">=</span> <span class="pl-smi">firstTouch</span>.<span class="pl-c1">pageX</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">touch</span>.<span class="pl-smi">y1</span> <span class="pl-k">=</span> <span class="pl-smi">firstTouch</span>.<span class="pl-c1">pageY</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (delta <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> delta <span class="pl-k">&lt;=</span> <span class="pl-c1">250</span>) <span class="pl-smi">touch</span>.<span class="pl-smi">isDoubleTap</span> <span class="pl-k">=</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">touch</span>.<span class="pl-smi">last</span> <span class="pl-k">=</span> now</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">        longTapTimeout <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(longTap, longTapDelay)</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// adds the current touch contact for IE gesture recognition</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (gesture <span class="pl-k">&amp;&amp;</span> _isPointerType) <span class="pl-smi">gesture</span>.<span class="pl-en">addPointer</span>(<span class="pl-smi">e</span>.<span class="pl-smi">pointerId</span>);</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>touchmove MSPointerMove pointermove<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>((_isPointerType <span class="pl-k">=</span> <span class="pl-en">isPointerEventType</span>(e, <span class="pl-s"><span class="pl-pds">&#39;</span>move<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">!</span><span class="pl-en">isPrimaryTouch</span>(e)) <span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">        firstTouch <span class="pl-k">=</span> _isPointerType <span class="pl-k">?</span> e <span class="pl-k">:</span> <span class="pl-smi">e</span>.<span class="pl-smi">touches</span>[<span class="pl-c1">0</span>]</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">cancelLongTap</span>()</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">touch</span>.<span class="pl-smi">x2</span> <span class="pl-k">=</span> <span class="pl-smi">firstTouch</span>.<span class="pl-c1">pageX</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">touch</span>.<span class="pl-smi">y2</span> <span class="pl-k">=</span> <span class="pl-smi">firstTouch</span>.<span class="pl-c1">pageY</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">        deltaX <span class="pl-k">+=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">abs</span>(<span class="pl-smi">touch</span>.<span class="pl-smi">x1</span> <span class="pl-k">-</span> <span class="pl-smi">touch</span>.<span class="pl-smi">x2</span>)</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">        deltaY <span class="pl-k">+=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">abs</span>(<span class="pl-smi">touch</span>.<span class="pl-smi">y1</span> <span class="pl-k">-</span> <span class="pl-smi">touch</span>.<span class="pl-smi">y2</span>)</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>touchend MSPointerUp pointerup<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">e</span>){</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>((_isPointerType <span class="pl-k">=</span> <span class="pl-en">isPointerEventType</span>(e, <span class="pl-s"><span class="pl-pds">&#39;</span>up<span class="pl-pds">&#39;</span></span>)) <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">!</span><span class="pl-en">isPrimaryTouch</span>(e)) <span class="pl-k">return</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">cancelLongTap</span>()</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// swipe</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ((<span class="pl-smi">touch</span>.<span class="pl-smi">x2</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">Math</span>.<span class="pl-c1">abs</span>(<span class="pl-smi">touch</span>.<span class="pl-smi">x1</span> <span class="pl-k">-</span> <span class="pl-smi">touch</span>.<span class="pl-smi">x2</span>) <span class="pl-k">&gt;</span> <span class="pl-c1">30</span>) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">            (<span class="pl-smi">touch</span>.<span class="pl-smi">y2</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">Math</span>.<span class="pl-c1">abs</span>(<span class="pl-smi">touch</span>.<span class="pl-smi">y1</span> <span class="pl-k">-</span> <span class="pl-smi">touch</span>.<span class="pl-smi">y2</span>) <span class="pl-k">&gt;</span> <span class="pl-c1">30</span>))</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">          swipeTimeout <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">touch</span>.<span class="pl-smi">el</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>swipe<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">touch</span>.<span class="pl-smi">el</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>swipe<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-en">swipeDirection</span>(<span class="pl-smi">touch</span>.<span class="pl-smi">x1</span>, <span class="pl-smi">touch</span>.<span class="pl-smi">x2</span>, <span class="pl-smi">touch</span>.<span class="pl-smi">y1</span>, <span class="pl-smi">touch</span>.<span class="pl-smi">y2</span>)))</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">            touch <span class="pl-k">=</span> {}</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">          }, <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">// normal tap</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-s"><span class="pl-pds">&#39;</span>last<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> touch)</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">// don&#39;t fire tap when delta position changed by more than 30 pixels,</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">// for instance when moving to a point and back to origin</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span> (deltaX <span class="pl-k">&lt;</span> <span class="pl-c1">30</span> <span class="pl-k">&amp;&amp;</span> deltaY <span class="pl-k">&lt;</span> <span class="pl-c1">30</span>) {</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// delay by one tick so we can cancel the &#39;tap&#39; event if &#39;scroll&#39; fires</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">// (&#39;tap&#39; fires before &#39;scroll&#39;)</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">            tapTimeout <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// trigger universal &#39;tap&#39; with the option to cancelTouch()</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// (cancelTouch cancels processing of single vs double taps for faster &#39;tap&#39; response)</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> <span class="pl-c1">event</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">Event</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>tap<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">event</span>.<span class="pl-smi">cancelTouch</span> <span class="pl-k">=</span> cancelAll</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">touch</span>.<span class="pl-smi">el</span>.<span class="pl-en">trigger</span>(<span class="pl-c1">event</span>)</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// trigger double tap immediately</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span> (<span class="pl-smi">touch</span>.<span class="pl-smi">isDoubleTap</span>) {</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-smi">touch</span>.<span class="pl-smi">el</span>) <span class="pl-smi">touch</span>.<span class="pl-smi">el</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>doubleTap<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">                touch <span class="pl-k">=</span> {}</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">              <span class="pl-c">// trigger single tap after 250ms of inactivity</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">                touchTimeout <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">                  touchTimeout <span class="pl-k">=</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">if</span> (<span class="pl-smi">touch</span>.<span class="pl-smi">el</span>) <span class="pl-smi">touch</span>.<span class="pl-smi">el</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>singleTap<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">                  touch <span class="pl-k">=</span> {}</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">                }, <span class="pl-c1">250</span>)</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">            }, <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">            touch <span class="pl-k">=</span> {}</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">          deltaX <span class="pl-k">=</span> deltaY <span class="pl-k">=</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// when the browser window loses focus,</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// for example when a modal dialog is shown,</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// cancel all ongoing events</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">      .<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>touchcancel MSPointerCancel pointercancel<span class="pl-pds">&#39;</span></span>, cancelAll)</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// scrolling the window indicates intention of the user</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// to scroll, not tap or swipe, so cancel all ongoing events</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-c1">window</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>scroll<span class="pl-pds">&#39;</span></span>, cancelAll)</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">  })</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">  ;[<span class="pl-s"><span class="pl-pds">&#39;</span>swipe<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>swipeLeft<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>swipeRight<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>swipeUp<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>swipeDown<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&#39;</span>doubleTap<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>tap<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>singleTap<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>longTap<span class="pl-pds">&#39;</span></span>].<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">eventName</span>){</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>[eventName] <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">callback</span>){ <span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">on</span>(eventName, callback) }</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">  })</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">})(Zepto)</td>
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
      <li>&copy; 2016 <span title="0.05764s from github-fe116-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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


      
      <script crossorigin="anonymous" integrity="sha256-nuVc6vh/w03IYzQkn+9svs6I6BVHjg++gWQtV+0P/4k=" src="https://assets-cdn.github.com/assets/frameworks-9ee55ceaf87fc34dc86334249fef6cbece88e815478e0fbe81642d57ed0fff89.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-3VFGlWeLsK4LzUOHz/O4igwuje+cs834saiI+xmXlGc=" src="https://assets-cdn.github.com/assets/github-dd514695678bb0ae0bcd4387cff3b88a0c2e8def9cb3cdf8b1a888fb19979467.js"></script>
      
      
      
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

