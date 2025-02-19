import{$ as z,na as J,oa as P,pa as A,qa as h,sa as H,va as V}from"./chunk-B6PNUZMB.js";import{$a as k,Ba as i,Cb as C,Db as M,Ia as x,Kb as q,N as S,Na as I,O as Q,Oa as D,Ra as E,T as F,Ua as c,ab as r,ca as T,eb as $,jb as f,kb as u,mb as v,nb as b,ob as y,pc as R,rb as _,rc as w,sb as j,sc as N,tb as g,tc as O,vb as p,vc as B,xb as d,yb as s}from"./chunk-SWZJMIZX.js";var K=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,L={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},G=(()=>{class e extends H{name="card";theme=K;classes=L;static \u0275fac=(()=>{let t;return function(n){return(t||(t=T(e)))(n||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var U=["header"],W=["title"],X=["subtitle"],Y=["content"],Z=["footer"],ee=["*",[["p-header"]],[["p-footer"]]],te=["*","p-header","p-footer"];function ne(e,o){e&1&&y(0)}function ae(e,o){if(e&1&&(f(0,"div",8),g(1,1),c(2,ne,1,0,"ng-container",6),u()),e&2){let t=_();i(2),r("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function ie(e,o){if(e&1&&(v(0),C(1),b()),e&2){let t=_(2);i(),M(t.header)}}function re(e,o){e&1&&y(0)}function oe(e,o){if(e&1&&(f(0,"div",9),c(1,ie,2,1,"ng-container",10)(2,re,1,0,"ng-container",6),u()),e&2){let t=_();i(),r("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),i(),r("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function le(e,o){if(e&1&&(v(0),C(1),b()),e&2){let t=_(2);i(),M(t.subheader)}}function ce(e,o){e&1&&y(0)}function pe(e,o){if(e&1&&(f(0,"div",11),c(1,le,2,1,"ng-container",10)(2,ce,1,0,"ng-container",6),u()),e&2){let t=_();i(),r("ngIf",t.subheader&&!t._subtitleTemplate&&t.subtitleTemplate),i(),r("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function de(e,o){e&1&&y(0)}function se(e,o){e&1&&y(0)}function me(e,o){if(e&1&&(f(0,"div",12),g(1,2),c(2,se,1,0,"ng-container",6),u()),e&2){let t=_();i(2),r("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var fe=(()=>{class e extends V{header;subheader;set style(t){z(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=x(null);_componentStyle=F(G);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=T(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["p-card"]],contentQueries:function(l,n,m){if(l&1&&(p(m,J,5),p(m,P,5),p(m,U,4),p(m,W,4),p(m,X,4),p(m,Y,4),p(m,Z,4),p(m,A,4)),l&2){let a;d(a=s())&&(n.headerFacet=a.first),d(a=s())&&(n.footerFacet=a.first),d(a=s())&&(n.headerTemplate=a.first),d(a=s())&&(n.titleTemplate=a.first),d(a=s())&&(n.subtitleTemplate=a.first),d(a=s())&&(n.contentTemplate=a.first),d(a=s())&&(n.footerTemplate=a.first),d(a=s())&&(n.templates=a)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[q([G]),E],ngContentSelectors:te,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(l,n){l&1&&(j(ee),f(0,"div",0),c(1,ae,3,1,"div",1),f(2,"div",2),c(3,oe,3,2,"div",3)(4,pe,3,2,"div",4),f(5,"div",5),g(6),c(7,de,1,0,"ng-container",6),u(),c(8,me,3,1,"div",7),u()()),l&2&&($(n.styleClass),r("ngClass","p-card p-component")("ngStyle",n._style()),k("data-pc-name","card"),i(),r("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),i(2),r("ngIf",n.header||n.titleTemplate||n._titleTemplate),i(),r("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),i(3),r("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),i(),r("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[B,R,w,O,N,h],encapsulation:2,changeDetection:0})}return e})(),ke=(()=>{class e{static \u0275fac=function(l){return new(l||e)};static \u0275mod=D({type:e});static \u0275inj=Q({imports:[fe,h,h]})}return e})();export{ke as a};
