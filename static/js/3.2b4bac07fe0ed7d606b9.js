webpackJsonp([3],{"Sgn/":function(t,n,e){"use strict";n.b=function(){var t=s()({},r.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,r.c)},n.a=function(t){var n=s()({},r.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:100,songstatus:1,g_tk:1664029744,singermid:t});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",n,r.c)};var i=e("aA9S"),s=e.n(i),a=e("Gak4"),r=e("T452")},eO3r:function(t,n){},lEJ1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("4YfN"),s=e.n(i),a=e("9rMa"),r=e("Sgn/"),c=e("T452"),o=e("PvFA"),u=e("kvay"),g={data:function(){return{songs:[]}},computed:s()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},Object(a.c)(["singer"])),methods:{_getDetail:function(){var t=this;this.singer.id?Object(r.a)(this.singer.id).then(function(n){n.code===c.a&&(t.songs=t._normalizeSongs(n.data.list))}):this.$router.push("/singer")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){var e=t.musicData;e.songid&&e.albummid&&n.push(Object(o.a)(e))}),n}},created:function(){this._getDetail()},components:{MusicList:u.a}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{songs:this.songs,title:this.title,"bg-image":this.bgImage}})],1)},staticRenderFns:[]},f=e("8AGX")(g,l,!1,function(t){e("eO3r")},null,null);n.default=f.exports}});
//# sourceMappingURL=3.2b4bac07fe0ed7d606b9.js.map