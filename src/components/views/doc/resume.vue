<template>
  <div id="container">
    <!-- 基本信息 -->
    <div class="basic" id="baseInfo">
        <div class="basic-photo">
            <img class="mr_headimg user-avatar" id="userpic" src="/static/images/myphoto1.jpg" alt="个人头像" width="100" height="140"
            />
        </div>
        <div class="basic-info">
            <div class="basic-name-area">
                <p class="basic-name female">王红秀</p>
            </div>
            <p class="basic-self">
                    <span class="basic-exp">4年工作经验 / 2年web前端开发经验 </span>
                    <span class="basic-edu">本科 . 统招  
                          / 
                    </span>
                    <span class="basic-age">25岁</span>
            </p>
            <p>
              <span class="basic-tel">
                  <i class="basic-tel_icon"></i>
                  <span>18380415079</span>
              </span>
              <span class="basic-email">
                  <i class="basic-email_icon"></i>
                  <span>1291636059@qq.com</span>
              </span>
            </p>
            <p class="basic-self">
              <span>CSDN:<a>https://blog.csdn.net/u012183426</a></span>
              <br/>
              <span>项目链接:<a>http://xaire.wang/#/</a></span>
            </p>
        </div>
    </div>
    <!-- /基本信息 -->

    <!-- 自我描述 -->
    <div class="mr-template per" id="perAbility">
        <div class="mr-template_title">
            <span>个人优势</span>
        </div>
        <div class="tagboard integrative-tag">
            <div class="integrative-tag_content">
              <span class="tagboard-tag">责任心</span>
              <span class="tagboard-tag">适应能力</span>
              <span class="tagboard-tag">沟通协调能力</span>
              <span class="tagboard-tag">执行力</span>
              <span class="tagboard-tag">团队精神</span>
            </div>
        </div>
        <div class="per-self_content">
          <div class="per-self_des">
                本人有2年前端开发经验。 <br/>
                能熟练开发vue组件，熟悉vue全家桶。 <br/>
                能熟练的运用javaScript、css、html5、jQuery等技术，渲染web页面。 <br/>
                了解nodejs，python后端语言。熟悉git的基本操作。 <br/>
          </div>
        </div>
    </div>
    <!-- /自我描述 -->

    <!-- 项目经历 -->
        <div class="mr-template pro-exp" id="proExp">
            <div class="mr-template_title">
                <span>项目经历</span>
            </div>
            <ol class="pro-exp_group">
                    <li class="pro-exp_list">
                        <p class="exp-list_title">
                            <span class="exp-project_name">公司承接的项目</span>
                        </p>
                        <p class="exp-list_time">2018.01-2019.12</p>
                        <div class="exp-project_des">
                            <p>
                                vue2.* +sass，定制前端页面模板。
                            </p>
                        </div>
                    </li>
                    <li class="pro-exp_list">
                        <p class="exp-list_title">
                            <span class="exp-project_name">个人技术实践网站</span>
                        </p>
                        <p class="exp-list_time">2019.11-2019.11</p>
                        <div class="exp-project_des"><p>搭建Vue的脚手架，实现SPA页面。涉及的技术有Vue+VueRouter+webpack+sass。<br /></p></div>
                        <div class="exp-list_content">
                            <p>在自己的个人项目中实现vue组件化、模块化。复用组件。深入理解vue。<br /></p>
                        </div>
                        <p class="exp-project_url">项目链接: http://xaire.wang/#/</p>
                    </li>
                    <li class="pro-exp_list">
                        <p class="exp-list_title">
                            <span class="exp-project_name">Element+vue</span>
                        </p>
                        <p class="exp-list_time">2019.12-2019.12</p>
                        <div class="exp-project_des"><p>快餐收银系统<br /></p></div>
                        <div class="exp-list_content">
                            <p>搭建vue-cli脚手架，使用element和阿里的在线图标实现快速布局，利用axios获取服务器上数据（使用mock模拟服务端的数据）。完成订餐系统的点餐和挂单功能。<br /></p>
                        </div>
                        <p class="exp-project_url">项目链接: https://github.com/Arkoly/AwesmonePosTest</p>
                    </li>
            </ol>
        </div>
    <!-- 工作经历 -->
        <div class="mr-template work-exp" id="workExp">
            <div class="mr-template_title">
                <span>工作经历</span>
            </div>
            <ol class="work-exp_group">
              <li class="work-exp_list">
                  <p class="exp-list_time">2018.01-2019.12</p>
                  <div class="exp-list_top">
                      <div class="exp-list_right">
                          <strong class="exp-list_title">
                              <span>北京鼎兴科技</span>
                                ／
                                  <span>技术部</span>
                          </strong>
                          <p>WEB前端</p>
                      </div>
                  </div>
                  <div class="tagboard">
                          <span class="tagboard-tag">vue</span>
                          <span class="tagboard-tag">HTML5</span>
                          <span class="tagboard-tag">Web前端</span>
                  </div>
                  <div class="exp-list_content">
                     <p>1.根据客户的需求资料，完成前端页面编写，参与后期网站的维护。<br />
                        2.更新公司vue项目的结构，将css、js文件分模块处理。<br />
                        3.实现vue通用组件，定制出前端页面的公用模板。达到模板复用的目的。<br />
                    </p>
                  </div>
              </li>
              <li class="work-exp_list">
                  <p class="exp-list_time">2016.10-2018.01</p>
                  <div class="exp-list_top">
                      <div class="exp-list_right">
                          <strong class="exp-list_title">
                              <span>Symbio</span>
                                ／
                                  <span>项目部</span>
                          </strong>
                          <p>测试工程师</p>
                      </div>
                  </div>
                  <div class="tagboard">
                          <span class="tagboard-tag">功能测试</span>
                          <span class="tagboard-tag">嵌入式软件测试</span>
                          <span class="tagboard-tag">兼容性测试</span>
                  </div>
                  <div class="exp-list_content">
                      <p>测试智能手表软件和相应的PC、Android、ios平台应用软件功能界面及数据<br /></p>
                  </div>
              </li>
              <li class="work-exp_list">
                  <p class="exp-list_time">2015.11-2016.06</p>
                  <div class="exp-list_top">
                      <div class="exp-list_right">
                          <strong class="exp-list_title">
                              <span>敦阳泰克成都科技有限公司</span>
                                ／
                                  <span>测试部</span>
                          </strong>
                          <p>自动化测试</p>
                      </div>
                  </div>
                  <div class="tagboard">
                          <span class="tagboard-tag">自动化测试</span>
                          <span class="tagboard-tag">手机测试</span>
                          <span class="tagboard-tag">UI测试</span>
                  </div>
                  <div class="exp-list_content">
                      <p></p>
                      <p>Android手机系统APP的UI自动化测试</p>
                      </div>
              </li>
            </ol>
        </div>
				<!--特长栏-->
				<div class="mr-template skill-exp" id="skillExp">
                    <div class="mr-template_title">
                        <span>技能特长</span>
                    </div>
                    <ol class="skill-exp_group">
                        <li class="skill-exp_list one">
                            <div class="third">
                                <div class="second"></div>
                                <div class="first"></div>
                                <div class="mask">
                                    <span>80%</span>
                                </div>
                            </div>
                            <div class="skill-name">WEB前端</div>
                        </li>
                        <li class="skill-exp_list two">
                            <div class="third">
                                <div class="second"></div>
                                <div class="first"></div>
                                <div class="mask">
                                    <span>80%</span>
                                </div>
                            </div>
                            <div class="skill-name">javascript</div>
                        </li>
                        <li class="skill-exp_list three">
                            <div class="third">
                                <div class="second"></div>
                                <div class="first"></div>
                                <div class="mask">
                                    <span>80%</span>
                                </div>
                            </div>
                            <div class="skill-name">HTML5</div>
                        </li>
                        <li class="skill-exp_list four">
                            <div class="third">
                                <div class="second"></div>
                                <div class="first"></div>
                                <div class="mask">
                                    <span>85%</span>
                                </div>
                            </div>
                            <div class="skill-name">CSS</div>
                        </li>
                    </ol>
				</div>
				
    <!-- 教育经历 -->
        <div class="mr-template edu-exp" id="eduExp">
            <div class="mr-template_title">
                <span>教育经历</span>
            </div>
            <ol class="edu-exp_group">
                    <li class="edu-exp_list">
                        <p class="exp-list_time">2012.09-2016.06</p>
                        <div class="exp-list_top">
                            <div class="exp-list_right">
                                <strong>四川大学锦城学院</strong>
                                <p>本科  . 统招  / 电子信息工程</p>
                            </div>
                        </div>
                    </li>
            </ol>
        </div>
  </div>
</template>

<script>

export default {
  components:{
  },
  data () {
    return {
      // perInfo:[]
    }
  },
   created(){
    // import(/* webpackChunkName: "[request]" */ `../skins/index.js`).then(mod => {
    //   let data = mod.perInfo;
    //   this.$nextTick(()=>{
    //     this.perInfo = data;
    //   });
    // });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
        * {
            outline: none;
        }

        body {
            margin: 0;
            padding: 0;
            font-size: 14px;
            font-family: "Hiragino Sans GB", "Microsoft Yahei", "SimSun", Arial, "Helvetica Neue", Helvetica;
            color: #333;
            word-wrap: break-word;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        menu,
        nav,
        section,
        summary {
            display: block;
        }

        progress {
            display: inline-block;
            vertical-align: baseline;
        }

        a {
            color: #555;
            background-color: transparent;
            text-decoration: none;
        }

        a:hover {
            color: #00b38a;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 10px 0;
            font-weight: normal;
        }

        p {
            margin: 0;
        }

        p+p {
            margin-top: 10px;
        }

        img {
            border: 0;
            vertical-align: top;
            display: inline-block;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
            margin: 0;
            padding: 0;
            border: 1px solid #ededed;
            border-radius: 0;
            font-family: "Hiragino Sans GB", "Microsoft Yahei", "SimSun", Arial, "Helvetica Neue", Helvetica;
        }

        textarea {
            overflow: auto;
        }

        label,
        select,
        button,
        input[type="button"],
        input[type="reset"],
        input[type="submit"],
        input[type="radio"],
        input[type="checkbox"],
        input[type="file"] {
            cursor: pointer;
        }

        input[type=text],
        input[type=password],
        textarea {
            font-family: "Microsoft Yahei", "SimSun", Arial, "Helvetica Neue", Helvetica;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
        }

        th,
        td {
            padding: 0;
        }

        strong {
            font-weight: normal;
        }

        em,
        i {
            font-style: normal;
        }

        dl,
        dt,
        dd {
            margin: 0;
        }

        ::selection {
            color: #fff;
            background-color: #00b38a;
        }

        ::-moz-selection {
            color: #fff;
            background-color: #00b38a;
        }

        ul,
        ol {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        #container {
            width: 720px;
            margin: 10px auto 54px auto;
            border: 1px solid #e3ebe9;
            border-radius: 5px;
            text-align: left;
            background: #FAFAFA;
        }

        .mr-template {
            padding: 0 50px;
        }

        .mr-template .mr-template_title {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }

        .mr-template .mr-template_title span {
            font-size: 18px;
            color: #333333;
            font-weight: 600;
            position: relative;
            margin-left: 10px;
        }

        .mr-template .mr-template_title span:before {
            content: '';
            display: block;
            border-left: 3px solid #00B38A;
            height: 16px;
            width: 3px;
            position: absolute;
            left: -7px;
            top: 50%;
            transform: translateY(-50%);
        }

        .mr-template .mr_md_del {
            display: none;
        }

        /***** 基本信息 ****/

        .basic {
            padding: 10px 50px;
            background: #FAFAFA;
            border-radius: 5px 5px 0 0;
            border-bottom: 1px solid #E3EBE9;
            display: flex;
        }

        .basic .basic-photo {
            height: 88px;
            width: 88px;
            display: inline-block;
            position: relative;
        }

        .basic .basic-photo img {
            height: 140px;
            width: 100px;
            position: absolute;
            top: 15px;
        }

        .basic .basic-photo .basic-photo_shadow {
            display: none;
        }

        .basic .basic-photo:hover .basic-photo_shadow {
            display: block;
        }

        .basic .basic-info {
            position: relative;
            width: 100%;
            margin-left: 60px;
            flex: 1;
        }

        .basic .basic-info .edit-btn {
            position: absolute;
            right: 0;
            top: 4px;
        }

        .basic .basic-info .basic-name-area {
            overflow: hidden;
            height: 37px;
            margin-bottom: 11px;
        }

        .basic .basic-info .basic-name {
            float: left;
            max-width: 250px;
            font-size: 26px;
            color: #333333;
            font-weight: 600;
            line-height: 37px;
        }

        .basic .basic-info .icon-sex {
            width: 13px;
            height: 13px;
            float: left;
            margin-top: 16px;
            margin-left: 10px;
            background: none;
        }
        .basic .basic-info .basic-self {
            margin-top: 20px;
			
        }
		.basic .basic-info .basic-edu{
			padding-left: 10px;
		}
		.basic .basic-info .basic-self a{
			margin-left: 20px;
			cursor:pointer;
		}
        .basic .basic-info p {
            font-size: 14px;
            color: #333333;
            line-height: 20px;
            margin-top: 6px;
        }

        .basic .basic-info i {
            display: inline-block;
            margin-right: 5px;
            vertical-align: middle;
        }

        .basic .basic-info .basic-tel_icon {
            width: 11px;
            height: 14px;
            margin-right: 2px;
            background: url(https://www.lgstatic.com/common/image/pc/icon_phone.png);
            display: inline-block;
            vertical-align: middle;
        }

        .basic .basic-info .basic-email_icon {
            width: 14px;
            height: 11px;
            margin-right: 2px;
            background: url(https://www.lgstatic.com/common/image/pc/icon_mail.png);
            display: inline-block;
            vertical-align: middle;
        }

        .basic .basic-info .basic-tel {
            margin-right: 20px;
        }

        .basic-tel span {
            vertical-align: middle;
        }

        .basic-email span {
            vertical-align: middle;
        }

        /***** 基本信息 end ****/

        /***** 自我描述 ****/

        .per .per-self_content {
            position: relative;
        }

        .per .per-self_content .per-self_des {
            margin-top: 13px;
            font-size: 14px;
            color: #666666;
            line-height: 30px;
        }

        .per .per-self_content .per-self_des p {
            margin-top: 0;
        }

        .per .per-self_content .per-self_des ol {
            list-style-type: decimal;
            -webkit-padding-start: 20px;
        }
        .per .per-self_content .per-self_des ul {
            list-style: disc;
            -webkit-padding-start: 20px;
        }

        /***** 自我描述 end ****/

        /***** 工作经历 ****/

        .work-exp .work-exp_list {
            position: relative;
            margin-bottom: 30px;
        }

        .work-exp .work-exp_list .exp-list_time {
            font-size: 14px;
            color: #666666;
            position: absolute;
            right: 0;
        }

        .work-exp .work-exp_list .exp-list_top {
            display: flex;
            align-items: center;
        }

        .work-exp .work-exp_list .exp-list_top img {
            width: 46px;
            height: 46px;
            margin-right: 10px;
        }

        .work-exp .work-exp_list .exp-list_top .exp-list_right {
            display: flex;
            flex-direction: column;
            flex: 1;
            height: 46px;
            justify-content: space-between;
        }

        .work-exp .work-exp_list .exp-list_top .exp-list_right p,
        .work-exp .work-exp_list .exp-list_top .exp-list_right strong {
            font-size: 14px;
            color: #333333;
        }

        .work-exp .work-exp_list .exp-list_top .exp-list_right strong {
            font-weight: 600;
        }

        .work-exp .work-exp_list .tagboard {
            margin: 20px 0 10px;
        }

        .work-exp .work-exp_list .exp-list_content {
            font-size: 14px;
            color: #666666;
            line-height: 30px;
        }

        .tagboard .tagboard-tag {
            font-size: 12px;
            color: #999;
            line-height: 18px;
            padding: 3px 10px;
            border: 1px solid #EAEDEC;
            border-radius: 100px;
            margin-right: 10px;
        }

        .work-exp .work-exp_list .exp-list_content ul, .work-exp .work-exp_list .exp-list_content_highlight ul {
            list-style: disc;
            -webkit-padding-start: 20px;
        }

        .work-exp .work-exp_list .exp-list_content ol, .work-exp .work-exp_list .exp-list_content_highlight ol {
            list-style-type: decimal;
            -webkit-padding-start: 20px;
        }
        /***** 工作经历 end ****/

        /***** 项目经历 ****/

        .pro-exp .pro-exp_list {
            position: relative;
            margin-bottom: 30px;
        }

        .pro-exp .pro-exp_list .exp-list_title {
            font-size: 14px;
            color: #333333;
            font-weight: 600;
            cursor: default;
            display: flex;
        }

        .pro-exp .pro-exp_list .exp-list_title .exp-project_name, .pro-exp .pro-exp_list .exp-list_title .exp-project_company span {
            max-width: 222px;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .pro-exp .pro-exp_list .exp-list_title .exp-project_company {
            display: flex;
        }

        .pro-exp .pro-exp_list .exp-list_time {
            font-size: 14px;
            color: #666666;
            position: absolute;
            right: 0;
            top: 0;
        }

        .pro-exp .pro-exp_list .exp-list_content,
        .pro-exp .pro-exp_list .exp-project_des {
            font-size: 14px;
            color: #666666;
            line-height: 30px;
            margin-top: 10px;
        }

        .pro-exp .exp-list_title.active:hover {
            color: #00B38A;
            cursor: pointer;
        }
        .pro-exp .exp-project_url {
            font-size: 14px;
            color: #666;
            line-height: 30px;
        }
        .pro-exp .pro-exp_list .exp-list_content ul, .pro-exp .pro-exp_list .exp-project_des ul {
            list-style: disc;
            -webkit-padding-start: 20px;
        }

        .pro-exp .pro-exp_list .exp-list_content ol,.pro-exp .pro-exp_list .exp-project_des ol{
            list-style-type:decimal;-webkit-padding-start:20px
        }

        /***** 项目经历 end ****/
        
        /***** 技能特长 ****/
        .skill-exp .skill-exp_list {
            position: relative;
            margin: 0 25px; 
            display: inline-block;
            width: 100px;
            height: 100px;
        }
        .skill-exp .skill-exp_list .third *{
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }

        .skill-exp .skill-exp_list .third{
            width:100px;
            height: 100px;
            border-radius: 50%;
            position: relative;
            background-color: #dacfcf;
        }
        .skill-exp .skill-exp_list .third .second{
            height: 100px;
            width: 100px;
            border-radius: 50%;
            position: absolute;
            background-color:#6ED4BF;
            clip: rect(0,50px,auto,0);
            transform: rotate(108deg);
        }
        .skill-exp .skill-exp_list.four .third .second{
            height: 100px;
            width: 100px;
            border-radius: 50%;
            position: absolute;
            background-color:#6ED4BF;
            clip: rect(0,50px,auto,0);
            transform: rotate(126deg);
        }
        .skill-exp .skill-exp_list .third .first{
            height: 100px;
            width: 100px;
            border-radius: 50%;
            position: absolute;
            background-color:#dacfcf;
            clip: rect(0,auto,auto,50px);
            
        }
        .skill-exp .skill-exp_list .third .mask{
            width: 90px;
            position: absolute;
            top: 5px;
            left: 5px;
            height: 90px;
            border-radius: 50%;
            background-color: #fff;
        }

        .skill-exp .skill-exp_list .third .mask>span{
            display: block;
            font-size: 20px;
            color: #6ED4BF;
            line-height: 100px;
            text-align: center;
        }
        .skill-exp .skill-exp_list .skill-name{
            text-align: center;
            font-size: 16px;
        }


        /***** 教育经历 ****/

        .edu-exp .edu-exp_list {
            position: relative;
            margin-bottom: 30px;
        }

        .edu-exp .edu-exp_list .exp-list_time {
            font-size: 14px;
            color: #666666;
            position: absolute;
            right: 0;
        }

        .edu-exp .edu-exp_list .exp-list_top {
            display: flex;
            align-items: center;
        }

        .edu-exp .edu-exp_list .exp-list_top img {
            width: 46px;
            height: 46px;
            margin-right: 10px;
        }

        .edu-exp .edu-exp_list .exp-list_top .exp-list_right {
            display: flex;
            flex-direction: column;
            flex: 1;
            height: 46px;
            justify-content: space-between;
        }

        .edu-exp .edu-exp_list .exp-list_top .exp-list_right p,
        .edu-exp .edu-exp_list .exp-list_top .exp-list_right strong {
            font-size: 14px;
            color: #333333;
        }

        .edu-exp .edu-exp_list .exp-list_top .exp-list_right strong {
            font-weight: 600;
        }


        /***** 教育经历 end ****/

        /***** 社交主页 ****/

        .social-page .social-page_list {
            margin-bottom: 30px;
            position: relative;
        }

        .social-page .social-page_list .social-page_content {
            display: flex;
        }

        .social-page .social-page_list .social-page_content img {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            border-radius: 50%;
        }

        .social-page .social-page_list .social-page_content p {
            font-size: 14px;
            color: #666666;
        }


        /***** 社交主页 end ****/
                /***** 图片作品 ****/

        .portfolio-page .portfolio-list{
            margin-bottom: 30px;
            position: relative;
        }
        .portfolio-page .portfolio-list .portfolio-content{
            font-size: 14px;
            color: #666666;
        }


        /***** 图片作品 end ****/
    </style>
