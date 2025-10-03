---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I’m a 5th-year CS PhD student at Cornell University, advised by Prof. [Kilian Weinberger](https://www.cs.cornell.edu/~kilian/) and [Wen Sun](https://wensun.github.io/). My research focuses on LLMs for math reasoning and theorem proving, efficient LLM evaluation, and RLHF for personalization and mitigating hallucinations. I graduated from the University of Toronto’s Engineering Science program (Machine Intelligence option), where I completed my thesis with Prof. [Roger Grosse](https://www.cs.toronto.edu/~rgrosse/) and was fortunate to have worked with Prof. [Nicolas Papernot](https://www.papernot.fr/) and [Scott Sanner](https://d3m.mie.utoronto.ca/members/ssanner/).

During my PhD, I’ve had a lot of fun interning at Meta (MSL), Google DeepMind (with [Seb Arnold](https://sebarnold.net/) and [Fei Sha](https://www.feisha.org/)), and Google Research (with [Yuhuai Wu](https://yuhuaiwu.github.io/) and [Christian Szegedy](https://scholar.google.com/citations?user=bnQMuzgAAAAJ&hl=en)). I am supported by an NSERC CGS-D Fellowship, Cornell University Fellowship and NSF NAIRR Pilot Award.

---

<div class="news-section">
<h1>News</h1>
<div class="news-container">
{% for item in site.data.news %}
<div class="news-item">
<span class="news-date">{{ item.date }}</span>
<span class="news-content">{{ item.content | markdownify | remove: '<p>' | remove: '</p>' | strip }}</span>
</div>
{% endfor %}
</div>
</div>

---


<div class="research-section">
<h2>Selected Papers</h2>
{% for paper in site.data.research %}
<div class="research-item{% if paper.featured %} featured{% endif %}">
  <div class="research-header">
    {% if paper.image %}
    <img src="{{ '/images/' | append: paper.image | relative_url }}" alt="{{ paper.title }}" class="research-image">
    {% endif %}
    <div class="research-content">
      <div class="research-title">
        {% if paper.links.pdf %}
          <a href="{{ paper.links.pdf }}">{{ paper.title }}</a>
        {% else %}
          {{ paper.title }}
        {% endif %}
      </div>
      <div class="research-authors">{{ paper.authors | replace: 'Jin Peng Zhou', '<span class="highlight-name">Jin Peng Zhou</span>' }}</div>
      <div class="research-venue">{{ paper.venue }} {{ paper.year }}</div>
      {% if paper.status %}
        <span class="research-status {{ paper.status | downcase | replace: ' ', '-' }}">{{ paper.status }}</span>
      {% endif %}
      {% if paper.award %}
        <span class="research-award {{ paper.award | downcase | replace: ' ', '-' }}">{{ paper.award }}</span>
      {% endif %}
      {% if paper.description %}
        <div class="research-description">{{ paper.description }}</div>
      {% endif %}
      <div class="research-links">
        {% if paper.links.pdf %}
          <a href="{{ paper.links.pdf }}" class="research-link">PDF</a>
        {% endif %}
        {% if paper.links.arxiv %}
          <a href="{{ paper.links.arxiv }}" class="research-link">arXiv</a>
        {% endif %}
        {% if paper.links.code %}
          <a href="{{ paper.links.code }}" class="research-link">Code</a>
        {% endif %}
        {% if paper.links.checkpoint %}
          <a href="{{ paper.links.checkpoint }}" class="research-link">Checkpoints</a>
        {% endif %}
        {% if paper.links.website %}
          <a href="{{ paper.links.website }}" class="research-link">Website</a>
        {% endif %}
        {% if paper.links.slides %}
          <a href="{{ paper.links.slides }}" class="research-link">Slides</a>
        {% endif %}
        {% if paper.links.poster %}
          <a href="{{ paper.links.poster }}" class="research-link">Poster</a>
        {% endif %}
        {% if paper.links.video %}
          <a href="{{ paper.links.video }}" class="research-link">Video</a>
        {% endif %}
      </div>
    </div>
  </div>
</div>
{% endfor %}
</div>

---