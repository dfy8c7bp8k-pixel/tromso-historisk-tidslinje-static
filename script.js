(function () {
  "use strict";

  const data = window.TROMSO_TIMELINE;
  const mount = document.getElementById("site");

  if (!data || !mount) {
    return;
  }

  document.documentElement.classList.add("js");
  document.documentElement.lang = data.page.htmlLang;
  document.title = data.page.title;

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function icon(name, size) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const paths = {
      arrowDown: ["M12 5v14", "m19 12-7 7-7-7"],
      arrowUp: ["M12 19V5", "m5 12 7-7 7 7"],
      arrowUpRight: ["M7 17 17 7", "M7 7h10v10"],
      book: ["M4 19.5A2.5 2.5 0 0 1 6.5 17H20", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z", "M8 7h8", "M8 11h6"],
      chevronDown: ["m6 9 6 6 6-6"],
      image: ["M14.5 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9.5", "m21 15-5-5L5 21", "M14 4h7v7", "M14 11 21 4"],
      mapPin: ["M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z", "M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"],
      heart: ["M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6a5.5 5.5 0 0 0 1-8.8Z"],
    };

    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", String(size || 18));
    svg.setAttribute("height", String(size || 18));
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.8");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");

    (paths[name] || []).forEach(function (definition) {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", definition);
      svg.appendChild(path);
    });
    return svg;
  }

  function assetPath(path) {
    return "../" + path.replace(/^\//, "");
  }

  function externalLink(url, label, iconName) {
    const link = element("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.appendChild(document.createTextNode(label));
    if (iconName) link.appendChild(icon(iconName, 14));
    return link;
  }

  function sourceName(image) {
    if (!image.sourceUrl) {
      return element("span", "", image.sourceLabel);
    }
    return externalLink(image.sourceUrl, image.sourceLabel, "arrowUpRight");
  }

  function activeSectionId() {
    const sections = Array.from(
      document.querySelectorAll("#introduksjon, .era[id], .timeline-event[id], #bildekilder"),
    );
    let current = "introduksjon";
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= 140) current = section.id;
    });
    return current;
  }

  function languageSwitcher() {
    const nav = element("nav", "language-switcher");
    nav.setAttribute("aria-label", data.page.languageLabel);

    const languageOptions = [
      { id: "no", htmlLang: "nb", shortLabel: "NO" },
      { id: "en", htmlLang: "en", shortLabel: "EN" },
      { id: "sme", htmlLang: "se", shortLabel: "SÁ" },
    ];

    languageOptions.forEach(function (language) {
      const code = language.id;
      const shortLabel = language.shortLabel;
      const link = element("a", "", shortLabel);
      link.setAttribute("aria-label", data.page.languages[code]);
      link.href = "../" + code + "/" + window.location.hash;
      link.hreflang = language.htmlLang;
      link.lang = link.hreflang;
      if (code === data.page.code) link.setAttribute("aria-current", "page");
      link.addEventListener("click", function () {
        link.href = "../" + code + "/#" + activeSectionId();
      });
      nav.appendChild(link);
    });
    return nav;
  }

  function hero() {
    const header = element("header", "hero");
    header.id = "top";
    header.appendChild(element("div", "hero__veil"));
    header.lastChild.setAttribute("aria-hidden", "true");

    const nav = element("nav", "hero__nav");
    nav.setAttribute("aria-label", data.page.navigationLabel);
    const wordmark = element("a", "wordmark");
    wordmark.href = "#top";
    wordmark.setAttribute("aria-label", data.page.wordmarkLabel);
    const mark = element("span", "wordmark__mark");
    mark.setAttribute("aria-hidden", "true");
    mark.append(element("i"), element("i"), element("i"));
    wordmark.append(mark, element("span", "", "Tromsø / Romsa"));

    const actions = element("div", "hero__actions");
    const sourceLink = element("a", "hero__source-link", data.page.imageSources);
    sourceLink.href = "#bildekilder";
    actions.append(sourceLink, languageSwitcher());
    nav.append(wordmark, actions);
    header.appendChild(nav);

    const content = element("div", "hero__content");
    content.appendChild(element("p", "eyebrow", data.page.eyebrow));
    const title = element("h1");
    title.append(document.createTextNode(data.page.heroTitle[0]), document.createElement("br"));
    title.appendChild(element("em", "", data.page.heroTitle[1]));
    content.appendChild(title);
    content.appendChild(element("p", "hero__lead", data.page.heroLead));
    const explore = element("a", "hero__scroll", data.page.explore);
    explore.href = "#introduksjon";
    explore.appendChild(icon("arrowDown", 18));
    content.appendChild(explore);
    header.appendChild(content);

    const caption = element("div", "hero__caption");
    caption.appendChild(element("span", "", data.heroImage.caption));
    const credit = element("span");
    credit.append(document.createTextNode(data.heroImage.credit + " · "), sourceName(data.heroImage));
    caption.appendChild(credit);
    header.appendChild(caption);
    return header;
  }

  function eraNavigation() {
    const nav = element("nav", "era-nav");
    nav.setAttribute("aria-label", data.page.jumpLabel);
    const inner = element("div", "era-nav__inner");
    inner.appendChild(element("span", "era-nav__label", data.page.jumpLabel));
    data.timelineEras.forEach(function (era) {
      const link = element("a", "", era.label);
      link.href = "#" + era.id;
      link.dataset.eraLink = era.id;
      inner.appendChild(link);
    });
    nav.appendChild(inner);
    return nav;
  }

  function translationNotice() {
    if (!data.page.translationNotice) {
      return document.createDocumentFragment();
    }
    const notice = element("aside", "translation-notice", data.page.translationNotice);
    notice.setAttribute("role", "status");
    return notice;
  }

  function introduction(eventCount) {
    const section = element("section", "introduction");
    section.id = "introduksjon";
    const kicker = element("div", "introduction__kicker");
    kicker.append(icon("mapPin", 19), element("span", "", data.page.north));
    section.appendChild(kicker);
    const copy = element("div", "introduction__copy");
    copy.appendChild(element("p", "introduction__lead", data.page.introductionLead));
    const body = element("div", "introduction__body");
    data.page.introductionParagraphs.forEach(function (paragraph) {
      body.appendChild(element("p", "", paragraph.replace("{count}", String(eventCount))));
    });
    copy.appendChild(body);
    section.appendChild(copy);
    return section;
  }

  function gallery(images, eventNumber) {
    const galleryClass = images.length === 1 ? "gallery--single" : images.length === 3 ? "gallery--three" : "gallery--pair";
    const container = element("div", "gallery " + galleryClass);
    images.forEach(function (image, imageIndex) {
      const figure = document.createElement("figure");
      const wrap = element("div", "gallery__image-wrap");
      const img = document.createElement("img");
      img.src = assetPath(image.src);
      img.alt = image.alt;
      img.loading = eventNumber < 3 ? "eager" : "lazy";
      img.decoding = "async";
      wrap.appendChild(img);
      const index = element("span", "gallery__index", String(imageIndex + 1).padStart(2, "0"));
      index.setAttribute("aria-hidden", "true");
      wrap.appendChild(index);
      figure.appendChild(wrap);

      const caption = document.createElement("figcaption");
      caption.appendChild(element("span", "", image.caption));
      const credit = element("span", "gallery__credit");
      credit.append(document.createTextNode(image.credit + " · "), sourceName(image));
      caption.appendChild(credit);
      figure.appendChild(caption);
      container.appendChild(figure);
    });
    return container;
  }

  function details(event) {
    const disclosure = element("details", "event-details");
    const summary = document.createElement("summary");
    const label = element("span");
    label.append(icon("book", 17), document.createTextNode(data.page.details));
    const chevron = icon("chevronDown", 18);
    chevron.classList.add("event-details__chevron");
    summary.append(label, chevron);
    disclosure.appendChild(summary);

    const body = element("div", "event-details__body");
    event.paragraphs.forEach(function (paragraph) {
      body.appendChild(element("p", "", paragraph));
    });
    const links = element("div", "source-links");
    event.sources.forEach(function (source) {
      links.appendChild(externalLink(source.url, source.label, "arrowUpRight"));
    });
    body.appendChild(links);
    disclosure.appendChild(body);
    return disclosure;
  }

  function timeline() {
    const shell = element("div", "timeline-shell");
    let eventNumber = 0;
    data.timelineEras.forEach(function (era) {
      const section = element("section", "era era--" + era.accent);
      section.id = era.id;
      const header = element("header", "era__header reveal");
      header.append(
        element("p", "era__label", era.label),
        element("h2", "", era.title),
        element("p", "", era.intro),
      );
      section.appendChild(header);

      const line = element("div", "timeline");
      era.events.forEach(function (event, eventIndex) {
        eventNumber += 1;
        const side = eventIndex % 2 === 0 ? "right" : "left";
        const article = element("article", "timeline-event timeline-event--" + side + " reveal");
        article.id = event.id;
        const date = element("time", "event-date", event.date);
        const marker = element("span", "event-marker");
        marker.setAttribute("aria-hidden", "true");
        marker.appendChild(element("span", "", String(eventNumber).padStart(2, "0")));

        const card = element("div", "event-card");
        const number = element("div", "event-card__number", String(eventNumber).padStart(2, "0"));
        number.setAttribute("aria-hidden", "true");
        card.append(
          number,
          element("p", "event-card__date", event.date),
          element("h3", "", event.title),
          element("p", "event-card__lead", event.lead),
        );
        if (event.images && event.images.length) card.appendChild(gallery(event.images, eventNumber));
        card.appendChild(details(event));
        article.append(date, marker, card);
        line.appendChild(article);
      });
      section.appendChild(line);
      shell.appendChild(section);
    });
    return shell;
  }

  function reconciliation() {
    const section = element("section", "reconciliation");
    const symbol = element("div", "reconciliation__icon");
    symbol.setAttribute("aria-hidden", "true");
    symbol.appendChild(icon("heart", 28));
    section.append(symbol, element("p", "", data.page.reconciliationLabel));
    const title = element("h2");
    data.page.reconciliationLines.forEach(function (line, index) {
      if (index) title.appendChild(document.createElement("br"));
      title.appendChild(document.createTextNode(line));
    });
    section.appendChild(title);
    return section;
  }

  function imageSources() {
    const section = element("section", "image-sources");
    section.id = "bildekilder";
    const header = element("header", "image-sources__header");
    const titleGroup = element("div");
    titleGroup.append(
      element("p", "eyebrow eyebrow--dark", data.page.documentation),
      element("h2", "", data.page.imageSources),
    );
    header.append(titleGroup, element("p", "", data.page.imageSourcesIntro));
    section.appendChild(header);

    const list = element("ol", "image-source-list");
    data.allTimelineImages.forEach(function (image, index) {
      const item = document.createElement("li");
      item.append(
        element("span", "image-source-list__number", String(index + 1).padStart(2, "0")),
        icon("image", 16),
        element("span", "image-source-list__title", image.caption),
        element("span", "image-source-list__credit", image.credit),
        sourceName(image),
      );
      list.appendChild(item);
    });
    section.appendChild(list);
    return section;
  }

  function footer() {
    const footer = element("footer", "site-footer");
    const name = element("div");
    name.append(element("span", "", "Tromsø / Romsa"), element("span", "", data.page.timelineName));
    const top = element("a", "", data.page.toTop + " ");
    top.href = "#top";
    top.appendChild(icon("arrowUp", 15));
    footer.append(name, element("p", "", data.page.footerText), top);
    return footer;
  }

  const main = element("main");
  main.id = "main";
  const eventCount = data.timelineEras.reduce(function (sum, era) {
    return sum + era.events.length;
  }, 0);
  main.append(
    hero(),
    translationNotice(),
    eraNavigation(),
    introduction(eventCount),
    timeline(),
    reconciliation(),
    imageSources(),
    footer(),
  );
  mount.appendChild(main);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");
  if (!reduceMotion && "IntersectionObserver" in window) {
    document.documentElement.classList.add("reveal-ready");
    const revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );
    reveals.forEach(function (node) {
      revealObserver.observe(node);
    });
  } else {
    reveals.forEach(function (node) {
      node.classList.add("is-visible");
    });
  }

  if ("IntersectionObserver" in window) {
    const eraLinks = new Map();
    document.querySelectorAll("[data-era-link]").forEach(function (link) {
      eraLinks.set(link.dataset.eraLink, link);
    });
    const eraObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          eraLinks.forEach(function (link) {
            link.removeAttribute("aria-current");
          });
          const link = eraLinks.get(entry.target.id);
          if (link) link.setAttribute("aria-current", "location");
        });
      },
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );
    data.timelineEras.forEach(function (era) {
      const section = document.getElementById(era.id);
      if (section) eraObserver.observe(section);
    });
  }
})();
