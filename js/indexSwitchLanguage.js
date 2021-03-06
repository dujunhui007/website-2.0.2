$(function () {
  //检测浏览器语言
  currentLang = navigator.language;   //判断除IE外其他浏览器使用语言
  if (!currentLang) {//判断IE浏览器使用语言
    currentLang = navigator.browserLanguage;
  }

  // alert(currentLang);

  //判断访问终端
  var browser = {
    versions: function () {
      var u = navigator.userAgent, app = navigator.appVersion;
      return {
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
      };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  };

  //browser.versions.trident返回真假，真则是IE内核，以此类推browser.versions.webKit是否为谷歌内核
  if (browser.versions.trident) {
    // alert("is IE");
  }
  if (browser.versions.webKit) {
    // alert("is webKit");
  }


  // console.log(screen.width);
  var languageFlag, getCookieKey;
  languageFlag = "languageFlag";

  loadProperties("strings_en");
  // setCookie(languageFlag, flag);
  getCookieKey = getCookie(languageFlag);
  if (getCookieKey) {
    // alert(getCookieKey);
    if (getCookieKey == 0) {
      loadProperties("strings_en");
      switchEn();
      window.flag = 1;
    } else {
      loadProperties("strings_zh-CN");
      switchZh();
      window.flag = 0;
    }
    window.flag = getCookieKey;
  } else {
    if (currentLang == "zh-CN") {
      loadProperties("strings_zh-CN");
      switchZh();
      // alert(getCookieKey);
      window.flag = 1;
    } else {
      loadProperties("strings_en");
      switchEn();
      // alert(getCookieKey);
      window.flag = 0;
    }
  }

  function setCookie(key, value) {
    document.cookie = key + "=" + escape(value);
  }

  function getCookie(flag) {
    var arr, reg = new RegExp("(^| )" + flag + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
      return (arr[2]);
    } else {
      return null;
    }
  }

  function switchEn() {

    $("nav .navContainer .navRight ul li a").css("letter-spacing", "0px");


    $("#home .aschHomeLinks a:nth-child(2)").attr("href", "http://asch-public.oss-cn-beijing.aliyuncs.com/asch.io/Asch-Whitepaper-en.pdf");

    $(".switchLanguageBtn .btnContainer .btn1 .btnFlag1 img").attr("src", "images/uk.png");
    $(".switchLanguageBtn .btnContainer .btn2 .btnFlag2 img").attr("src", "images/china.png");
    $(".switchLanguageBtn .btnContainer .btn1  .btnText1").html("English");
    $(".switchLanguageBtn .btnContainer .btn2  .btnText2").html("中文简体");

    $("#downloads .downloadsContainer .downloadsContainerLeft .dlsit-list li .dlistBtns a:nth-child(1)").attr("data-text", "Download");
    $("#downloads .downloadsContainer .downloadsContainerLeft .dlsit-list li .dlistBtns a:nth-child(2)").attr("data-text", "More");


    $("#downloads .downloadsContainer .downloadsContainerLeft .dlist li").css("font-size", "16px");

    $("#introduction .introductionContainer .aschVideo .videoText").attr("src", "images/aschVideoText.png");


    $(".homeLinksContainer ul.homeLinks li p").css("font-size", "16px");
    $(".homeLinksContainer ul.homeLinks li p:nth-child(2)").css("font-size", "20px");
    $(".homeLinksContainer ul.homeLinks li a .homeLinkGitHub").css("font-size", "20px");

    $(".section .sectionTop span").css("font-size", "36px");

    $("#features .featuresTopContainer .featuresTop h4").css({"font-weight": "300", "font-size": "48px"});
    $("#featuresTwo .featuresBottomContainer .featuresBottom h4").css({"font-weight": "300", "font-size": "48px"});

    $("#home .aschHomeLinks a:nth-child(1) img:nth-child(2)").css({
      "top": "12px",
      "width": "120px",
      "left": "39px"
    });
    $("#home .aschHomeLinks a:nth-child(1) img:nth-child(1)").css({
      "top": "15px",
      "width": "120px",
      "left": "-125px"
    });

    $("#home .homeContainer .homeContainerContent .aschHomeImg1 img").attr("src", "images/aschHomeUKImg.png");
    $("#home .homeContainer .homeContainerContent .aschHomeLinks .toGetStarted .toGetStarted1").attr("src", "images/comeSoon.png");
    $("#home .homeContainer .homeContainerContent .aschHomeLinks .toGetStarted .toGetStarted2").attr("src", "images/Getstarted.png");

    $("#home .homeContainer .homeContainerContent .aschHomeLinks .toWhitePaper .toWhitePaper1").attr("src", "images/white1.png");
    $("#home .homeContainer .homeContainerContent .aschHomeLinks .toWhitePaper .toWhitePaper2").attr("src", "images/WhitePaper.png");
    $("#scenarios .scenariosBackground").css({"width": "82%", "left": "9%"});
    $("#downloads .downloadsContainer .downloadsContainerLeft .dlist li:nth-child(3)").css({"padding-top": "5px"});

    if (screen.width > 1910) {
      $("#downloads .downloadsContainer .downloadsContainerLeft .dlist li:nth-child(3)").css({"padding-top": "0px"});
    } else if ((1640 < screen.width) && (screen.width < 1910)) {
      $("#downloads .downloadsContainer .downloadsContainerLeft .dlist li:nth-child(3)").css({
        "line-height": "50px",
        "padding-top": "5px"
      });
    } else {
      $("#downloads .downloadsContainer .downloadsContainerLeft .dlist li:nth-child(3)").css({
        "line-height": "25px",
        "padding-top": "5px"
      });
    }
  }

  function switchZh() {
    $("nav .navContainer .navRight ul li a").css("letter-spacing", "2px");


    $("#home .aschHomeLinks a:nth-child(2)").attr("href", "http://asch-public.oss-cn-beijing.aliyuncs.com/asch.io/Asch-whitepaper-zh.pdf");


    $(".switchLanguageBtn .btnContainer .btn1 .btnFlag1 img").attr("src", "images/china.png");
    $(".switchLanguageBtn .btnContainer .btn2 .btnFlag2 img").attr("src", "images/uk.png");
    $(".switchLanguageBtn .btnContainer .btn1  .btnText1").html("中文简体");
    $(".switchLanguageBtn .btnContainer .btn2  .btnText2").html("English");

    $("#downloads .downloadsContainer .downloadsContainerLeft .dlsit-list li .dlistBtns a:nth-child(1)").attr("data-text", "下载");
    $("#downloads .downloadsContainer .downloadsContainerLeft .dlsit-list li .dlistBtns a:nth-child(2)").attr("data-text", "更多");

    $("#downloads .downloadsContainer .downloadsContainerLeft .dlist li").css("font-size", "20px");

    $("#introduction .introductionContainer .aschVideo .videoText").attr("src", "images/aschVideoText1.png");

    $("#features .featuresTopContainer .featuresTop h4").css({"font-weight": "400", "font-size": "40px"});

    $("#featuresTwo .featuresBottomContainer .featuresBottom h4").css({"font-weight": "400", "font-size": "40px"});

    $(".section .sectionTop span").css("font-size", "32px");

    $(".homeLinksContainer ul.homeLinks li p").css("font-size", "14px");
    $(".homeLinksContainer ul.homeLinks li p:nth-child(2)").css("font-size", "18px");
    $(".homeLinksContainer ul.homeLinks li a .homeLinkGitHub").css("font-size", "20px");


    $("#home .aschHomeLinks a:nth-child(1) img:nth-child(2)").css({
      "top": "12px",
      "width": "100px",
      "left": "50px"
    });
    $("#home .aschHomeLinks a:nth-child(1) img:nth-child(1)").css({
      "top": "13px",
      "width": "100px",
      "left": "-115px"
    });


    $("#home .homeContainer .homeContainerContent .aschHomeImg1 img").attr("src", "images/aschHomeChinaImg.png");
    $("#home .homeContainer .homeContainerContent .aschHomeLinks .toGetStarted .toGetStarted1").attr("src", "images/comeSoon1.png");
    $("#home .homeContainer .homeContainerContent .aschHomeLinks .toGetStarted .toGetStarted2").attr("src", "images/getstarted1.png");

    $("#home .homeContainer .homeContainerContent .aschHomeLinks .toWhitePaper .toWhitePaper1").attr("src", "images/whitePaper2.png");
    $("#home .homeContainer .homeContainerContent .aschHomeLinks .toWhitePaper .toWhitePaper2").attr("src", "images/whitePaper1.png");
    $("#scenarios .scenariosBackground").css({"width": "76%", "left": "12%"});


    $("#downloads .downloadsContainer .downloadsContainerLeft .dlist li:nth-child(3)").css({"padding-top": "17px"});

    if (screen.width > 1910) {
      $("#downloads .downloadsContainer .downloadsContainerLeft .dlist li:nth-child(3)").css({"padding-top": "0px"});
    }

    if ((1640 < screen.width) && (screen.width < 1910)) {
      // alert(screen.width);
      $("#downloads .downloadsContainer .downloadsContainerLeft .dlist li:nth-child(3)").css({"line-height": "25px","padding-top": "5px"});
    }
  }


  $(".switchLanguageBtn .btnContainer .btn2").click(function () {

    if (flag == 1) {
      loadProperties("strings_en");
      window.flag = 0;
      setCookie(languageFlag, flag);
      switchEn();
    } else {
      loadProperties("strings_zh-CN");
      window.flag = 1;
      setCookie(languageFlag, flag);
      switchZh();
    }
  });
});

function loadProperties(str) {
  jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
    name: str, //资源文件名称
    path: 'resources/i18n/', //资源文件路径
    mode: 'map', //用Map的方式使用资源文件中的值
    callback: function () {//加载成功后设置显示内容
      $('#nav_home').html($.i18n.prop('string_navhome'));
      $('#dappNavHome').html($.i18n.prop('string_dappNavHome'));
      $('#nav_introduction').html($.i18n.prop('string_navintroduction'));
      $('#nav_dapps').html($.i18n.prop('string_navdapps'));
      $('#nav_features').html($.i18n.prop('string_navfeatures'));
      $('#nav_advantages').html($.i18n.prop('string_navadvantages'));
      $('#nav_scenarios').html($.i18n.prop('string_navscenarios'));
      $('#nav_downloads').html($.i18n.prop('string_navdownloads'));
      $('#nav_partners').html($.i18n.prop('string_navpartners'));
      $('#nav_links').html($.i18n.prop('string_navlinks'));

      $('#homeLinksAschCode').html($.i18n.prop('string_homeLinksAschCode'));
      $('#homeLinksAschExplorer').html($.i18n.prop('string_homeLinksAschExplorer'));
      $('#homeLinksAschExplorerContent').html($.i18n.prop('string_homeLinksAschExplorerContent'));
      $('#homeLinksAschWallet').html($.i18n.prop('string_homeLinksAschWallet'));
      $('#homeLinksAschWalletContent').html($.i18n.prop('string_homeLinksAschWalletContent'));
      $('#homeLinksAschForum').html($.i18n.prop('string_homeLinksAschForum'));
      $('#homeLinksAschForumContent').html($.i18n.prop('string_homeLinksAschForumContent'));

      $('#introductionTopTitle').html($.i18n.prop('string_introductionTopTitle'));
      $('#introductionTopContent').html($.i18n.prop('string_introductionTopContent'));
      $('#introductionContentTitleOne').html($.i18n.prop('string_introductionContentTitleOne'));
      $('#introductionContentOne').html($.i18n.prop('string_introductionContentOne'));
      $('#introductionContentTitleTwo').html($.i18n.prop('string_introductionContentTitleTwo'));
      $('#introductionContentTwo').html($.i18n.prop('string_introductionContentTwo'));

      $('#dappsTitle').html($.i18n.prop('string_dappsTitle'));
      $('#dappsTopContent').html($.i18n.prop('string_dappsTopContent'));
      $('#applicationDetailContent1').html($.i18n.prop('string_applicationDetailContent1'));
      $('#applicationDetailMore1').html($.i18n.prop('string_applicationDetailMore1'));
      $('#applicationDetailMore2').html($.i18n.prop('string_applicationDetailMore1'));
      $('#applicationDetailMore3').html($.i18n.prop('string_applicationDetailMore1'));
      $('#applicationDetailMore4').html($.i18n.prop('string_applicationDetailMore1'));

      $('#applicationDetailTitle2').html($.i18n.prop('string_applicationDetailTitle2'));
      $('#applicationDetailDescribe2').html($.i18n.prop('string_applicationDetailDescribe2'));
      $('#applicationDetailTitle3').html($.i18n.prop('string_applicationDetailTitle3'));
      $('#applicationDetailDescribe3').html($.i18n.prop('string_applicationDetailDescribe3'));
      $('#applicationDetailDescribe4').html($.i18n.prop('string_applicationDetailDescribe4'));

      $('#feature1').html($.i18n.prop('string_feature1'));
      $('#feature2').html($.i18n.prop('string_feature2'));
      $('#commonText1').html($.i18n.prop('string_commonText1'));
      $('#commonText2').html($.i18n.prop('string_commonText1'));
      $('#commonText3').html($.i18n.prop('string_commonText1'));
      $('#commonText4').html($.i18n.prop('string_commonText1'));
      $('#commonText5').html($.i18n.prop('string_commonText1'));
      $('#commonText6').html($.i18n.prop('string_commonText1'));
      $('#featuresTopTitle').html($.i18n.prop('string_featuresTopTitle'));
      $('#featuresTopTitleContent').html($.i18n.prop('string_featuresTopTitleContent'));

      $('#featuresTopTitle2').html($.i18n.prop('string_featuresTopTitle2'));
      $('#featuresTopTitleContent2').html($.i18n.prop('string_featuresTopTitleContent2'));
      $('#featuresTopTitle3').html($.i18n.prop('string_featuresTopTitle3'));
      $('#featuresTopTitleContent3').html($.i18n.prop('string_featuresTopTitleContent3'));
      $('#featuresTopTitle4').html($.i18n.prop('string_featuresTopTitle4'));
      $('#featuresTopTitleContent4').html($.i18n.prop('string_featuresTopTitleContent4'));
      $('#featuresTopTitle5').html($.i18n.prop('string_featuresTopTitle5'));
      $('#featuresTopTitleContent5').html($.i18n.prop('string_featuresTopTitleContent5'));
      $('#featuresTopTitle6').html($.i18n.prop('string_featuresTopTitle6'));
      $('#featuresTopTitleContent6').html($.i18n.prop('string_featuresTopTitleContent6'));

      $('#featuresTopTitle7').html($.i18n.prop('string_featuresTopTitle7'));
      $('#featuresTopTitleContent7').html($.i18n.prop('string_featuresTopTitleContent7'));
      $('#featuresTopTitle8').html($.i18n.prop('string_featuresTopTitle8'));
      $('#featuresTopTitleContent8').html($.i18n.prop('string_featuresTopTitleContent8'));
      $('#featuresTopTitle9').html($.i18n.prop('string_featuresTopTitle9'));
      $('#featuresTopTitleContent9').html($.i18n.prop('string_featuresTopTitleContent9'));
      $('#featuresTopTitle10').html($.i18n.prop('string_featuresTopTitle10'));
      $('#featuresTopTitleContent10').html($.i18n.prop('string_featuresTopTitleContent10'));
      $('#featuresTopTitle11').html($.i18n.prop('string_featuresTopTitle11'));
      $('#featuresTopTitleContent11').html($.i18n.prop('string_featuresTopTitleContent11'));
      $('#featuresTopTitle12').html($.i18n.prop('string_featuresTopTitle12'));
      $('#featuresTopTitleContent12').html($.i18n.prop('string_featuresTopTitleContent12'));
      $('#featuresTopTitle13').html($.i18n.prop('string_featuresTopTitle13'));
      $('#featuresTopTitleContent13').html($.i18n.prop('string_featuresTopTitleContent13'));
      $('#featuresTopTitle14').html($.i18n.prop('string_featuresTopTitle14'));
      $('#featuresTopTitleContent14').html($.i18n.prop('string_featuresTopTitleContent14'));
      $('#featuresTopTitle15').html($.i18n.prop('string_featuresTopTitle15'));
      $('#featuresTopTitleContent15').html($.i18n.prop('string_featuresTopTitleContent15'));

      $('#AdvantagesTitle').html($.i18n.prop('string_AdvantagesTitle'));

      $('#advantages1').html($.i18n.prop('string_advantages1'));
      $('#advantagesContent1').html($.i18n.prop('string_advantagesContent1'));
      $('#advantages2').html($.i18n.prop('string_advantages2'));
      $('#advantagesContent2').html($.i18n.prop('string_advantagesContent2'));
      $('#advantages3').html($.i18n.prop('string_advantages3'));
      $('#advantagesContent3').html($.i18n.prop('string_advantagesContent3'));
      $('#advantages4').html($.i18n.prop('string_advantages4'));
      $('#advantagesContent4').html($.i18n.prop('string_advantagesContent4'));
      $('#advantages5').html($.i18n.prop('string_advantages5'));
      $('#advantagesContent5').html($.i18n.prop('string_advantagesContent5'));
      $('#advantages6').html($.i18n.prop('string_advantages6'));
      $('#advantagesContent6').html($.i18n.prop('string_advantagesContent6'));

      $('#scenariosTitle').html($.i18n.prop('string_scenariosTitle'));
      $('#scenariosTitle1').html($.i18n.prop('string_scenariosTitle1'));

      $('#scenariosTitle2').html($.i18n.prop('string_scenariosTitle2'));
      $('#scenariosDescribe2').html($.i18n.prop('string_scenariosDescribe2'));
      $('#scenariosContent2').html($.i18n.prop('string_scenariosContent2'));
      $('#scenariosTitle3').html($.i18n.prop('string_scenariosTitle3'));
      $('#scenariosDescribe3').html($.i18n.prop('string_scenariosDescribe3'));
      $('#scenariosContent3').html($.i18n.prop('string_scenariosContent3'));
      $('#scenariosTitle4').html($.i18n.prop('string_scenariosTitle4'));
      $('#scenariosDescribe4').html($.i18n.prop('string_scenariosDescribe4'));
      $('#scenariosContent4').html($.i18n.prop('string_scenariosContent4'));
      $('#scenariosTitle5').html($.i18n.prop('string_scenariosTitle5'));
      $('#scenariosDescribe5').html($.i18n.prop('string_scenariosDescribe5'));
      $('#scenariosContent5').html($.i18n.prop('string_scenariosContent5'));
      $('#scenariosTitle6').html($.i18n.prop('string_scenariosTitle6'));
      $('#scenariosDescribe6').html($.i18n.prop('string_scenariosDescribe6'));
      $('#scenariosContent6').html($.i18n.prop('string_scenariosContent6'));
      $('#scenariosTitle7').html($.i18n.prop('string_scenariosTitle7'));
      $('#scenariosDescribe7').html($.i18n.prop('string_scenariosDescribe7'));
      $('#scenariosContent7').html($.i18n.prop('string_scenariosContent7'));

      $('#downloadsTitle').html($.i18n.prop('string_downloadsTitle'));
      $('#downloadsTitle1').html($.i18n.prop('string_downloadsTitle1'));
      $('#downloadsTitle11').html($.i18n.prop('string_downloadsTitle1'));
      $('#downloadsTitle2').html($.i18n.prop('string_downloadsTitle2'));
      $('#downloadsTitle22').html($.i18n.prop('string_downloadsTitle2'));
      $('#downloadsTitle3').html($.i18n.prop('string_downloadsTitle3'));
      $('#downloadsTitle33').html($.i18n.prop('string_downloadsTitle3'));
      $('#downloadsTitle4').html($.i18n.prop('string_downloadsTitle4'));
      $('#downloadsTitle44').html($.i18n.prop('string_downloadsTitle4'));

      $('#downloadContent1').html($.i18n.prop('string_downloadContent1'));
      $('#downloadContent2').html($.i18n.prop('string_downloadContent2'));
      $('#downloadContent3').html($.i18n.prop('string_downloadContent3'));
      $('#downloadContent4').html($.i18n.prop('string_downloadContent4'));

      $('#downloadLink1').html($.i18n.prop('string_downloadLink1'));
      $('#downloadLink2').html($.i18n.prop('string_downloadLink1'));
      $('#downloadLink3').html($.i18n.prop('string_downloadLink1'));
      $('#downloadLink4').html($.i18n.prop('string_downloadLink1'));
      $('#downloadLink11').html($.i18n.prop('string_downloadLink11'));
      $('#downloadLink22').html($.i18n.prop('string_downloadLink11'));
      $('#downloadLink33').html($.i18n.prop('string_downloadLink11'));
      $('#downloadLink44').html($.i18n.prop('string_downloadLink11'));


      $('#partnersTitle').html($.i18n.prop('string_partnersTitle'));
      $('#linkTitle1').html($.i18n.prop('string_linkTitle1'));
      $('#linkTitle2').html($.i18n.prop('string_linkTitle2'));
      $('#linkTitle3').html($.i18n.prop('string_linkTitle3'));
      $('#linkTitle4').html($.i18n.prop('string_linkTitle4'));

      $('#footerLink1').html($.i18n.prop('string_footerLink1'));
      $('#footerLink2').html($.i18n.prop('string_footerLink2'));
      $('#footerLink3').html($.i18n.prop('string_footerLink3'));

    }
  });
}

