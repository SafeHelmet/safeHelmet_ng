import{a as et}from"./chunk-JB46PR6B.js";import{a as Ue,b as We,c as Xe,d as he,g as tt}from"./chunk-YVYE42T4.js";import{c as fe}from"./chunk-4US7J543.js";import{G as le,K as R,M as S,Q as ce,R as pe,T as Ne,U as qe,ca as Ze,da as de,fa as Qe,ia as be,ja as je,ka as ge,la as Ge,na as Je,q as J,r as E,ta as Ye}from"./chunk-TLMZUFWV.js";import{g as Re,h as Oe,i as He,j as ze,m as ue}from"./chunk-7UN3SXKF.js";import{$ as f,$a as b,$b as k,Ba as u,Bb as Q,Ca as I,Cb as ne,Db as $e,Eb as Ee,Ga as Te,Ia as q,Kb as De,Lb as Fe,Mb as j,N as X,Na as L,Nb as G,Ra as V,T as Y,Ta as te,Ua as c,Wb as U,Zb as Ae,aa as h,ab as r,ac as B,ba as Ce,ca as A,db as Le,dc as Ve,eb as K,f as Ie,ha as C,ic as Ke,jb as p,kb as d,la as we,lb as g,mb as M,nb as P,ob as ie,pa as ke,pb as D,pc as oe,qb as w,qc as Be,rb as m,rc as re,sb as Me,sc as ae,tb as Pe,tc as se,u as xe,v as ye,va as ee,vb as $,vc as me,wa as Se,wb as Z,xb as x,xc as W,y as ve,yb as y}from"./chunk-SWZJMIZX.js";import{a as z,b as N}from"./chunk-ODN5LVDJ.js";var nt=(()=>{class t extends Ge{static \u0275fac=(()=>{let e;return function(n){return(e||(e=A(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["BarsIcon"]],features:[V],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(i,n){i&1&&(Ce(),p(0,"svg",0),g(1,"path",1),d()),i&2&&(K(n.getClassNames()),b("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var ut=({dt:t})=>`
.p-menubar {
    display: flex;
    align-items: center;
    background: ${t("menubar.background")};
    border: 1px solid ${t("menubar.border.color")};
    border-radius: ${t("menubar.border.radius")};
    color: ${t("menubar.color")};
    padding: ${t("menubar.padding")};
    gap: ${t("menubar.gap")};
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: ${t("menubar.gap")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${t("menubar.base.item.border.radius")};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${t("menubar.base.item.padding")};
}

.p-menubar-item-content {
    transition: background ${t("menubar.transition.duration")}, color ${t("menubar.transition.duration")};
    border-radius: ${t("menubar.item.border.radius")};
    color: ${t("menubar.item.color")};
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${t("menubar.item.padding")};
    gap: ${t("menubar.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: ${t("menubar.item.icon.color")};
}

.p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.color")};
    margin-left: auto;
    font-size: ${t("menubar.submenu.icon.size")};
    width: ${t("menubar.submenu.icon.size")};
    height: ${t("menubar.submenu.icon.size")};
}

.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: ${t("menubar.item.focus.color")};
    background: ${t("menubar.item.focus.background")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: ${t("menubar.item.icon.focus.color")};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: ${t("menubar.item.focus.color")};
    background: ${t("menubar.item.focus.background")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: ${t("menubar.item.icon.focus.color")};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.focus.color")};
}

.p-menubar-item-active > .p-menubar-item-content {
    color: ${t("menubar.item.active.color")};
    background: ${t("menubar.item.active.background")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: ${t("menubar.item.icon.active.color")};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${t("menubar.submenu.icon.active.color")};
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: ${t("menubar.submenu.background")};
    border: 1px solid ${t("menubar.submenu.border.color")};
    border-radius: ${t("menubar.border.radius")};
    box-shadow: ${t("menubar.submenu.shadow")};
    color: ${t("menubar.submenu.color")};
    flex-direction: column;
    padding: ${t("menubar.submenu.padding")};
    gap: ${t("menubar.submenu.gap")};
}

.p-menubar-submenu .p-menubar-separator {
    border-top: 1px solid ${t("menubar.separator.border.color")};
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

.p-menubar-submenu > .p-menubar-item-active .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${t("menubar.mobile.button.size")};
    height: ${t("menubar.mobile.button.size")};
    position: relative;
    color: ${t("menubar.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${t("menubar.mobile.button.border.radius")};
    transition: background ${t("menubar.transition.duration")}, color ${t("menubar.transition.duration")}, outline-color ${t("menubar.transition.duration")};
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: ${t("menubar.mobile.button.hover.color")};
    background: ${t("menubar.mobile.button.hover.background")};
}

.p-menubar-button:focus-visible {
    box-shadow: ${t("menubar.mobile.button.focus.ring.shadow")};
    outline: ${t("menubar.mobile.button.focus.ring.width")} ${t("menubar.mobile.button.focus.ring.style")} ${t("menubar.mobile.button.focus.ring.color")};
    outline-offset: ${t("menubar.mobile.button.focus.ring.offset")};
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: ${t("menubar.submenu.padding")};
    background: ${t("menubar.submenu.background")};
    border: 1px solid ${t("menubar.submenu.border.color")};
    box-shadow: ${t("menubar.submenu.shadow")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${t("menubar.item.border.radius")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${t("menubar.item.padding")};
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-top: 1px solid ${t("menubar.separator.border.color")};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: ${t("menubar.submenu.mobile.indent")};
}
`;var lt={root:({instance:t})=>["p-menubar p-component",{"p-menubar-mobile":t.queryMatches,"p-menubar-mobile-active":t.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:t,processedItem:a})=>["p-menubar-item",{"p-menubar-item-active":t.isItemActive(a),"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},ot=(()=>{class t extends Qe{name="menubar";theme=ut;classes=lt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=A(t)))(n||t)}})();static \u0275prov=X({token:t,factory:t.\u0275fac})}return t})();var ct=["menubar"],pt=(t,a)=>({"p-menubar-submenu":t,"p-menubar-root-list":a}),rt=t=>({"p-menubar-item-link":!0,"p-disabled":t}),dt=()=>({exact:!1}),bt=(t,a)=>({$implicit:t,root:a}),gt=t=>({display:t});function ft(t,a){if(t&1&&g(0,"li",8),t&2){let e=m().$implicit,i=m();Le(i.getItemProp(e,"style")),r("ngClass",i.getSeparatorItemClass(e)),b("id",i.getItemId(e))("data-pc-section","separator")}}function ht(t,a){if(t&1&&g(0,"span",19),t&2){let e=m(4).$implicit,i=m();r("ngClass",i.getItemProp(e,"icon"))("ngStyle",i.getItemProp(e,"iconStyle")),b("data-pc-section","icon")("tabindex",-1)}}function _t(t,a){if(t&1&&(p(0,"span",20),ne(1),d()),t&2){let e=m(4).$implicit,i=m();r("id",i.getItemLabelId(e)),b("data-pc-section","label"),u(),Ee(" ",i.getItemLabel(e)," ")}}function It(t,a){if(t&1&&g(0,"span",21),t&2){let e=m(4).$implicit,i=m();r("innerHTML",i.getItemLabel(e),ee)("id",i.getItemLabelId(e)),b("data-pc-section","label")}}function xt(t,a){if(t&1&&g(0,"p-badge",22),t&2){let e=m(4).$implicit,i=m();r("styleClass",i.getItemProp(e,"badgeStyleClass"))("value",i.getItemProp(e,"badge"))}}function yt(t,a){t&1&&g(0,"AngleDownIcon",25),t&2&&b("data-pc-section","submenuicon")}function vt(t,a){t&1&&g(0,"AngleRightIcon",25),t&2&&b("data-pc-section","submenuicon")}function Ct(t,a){if(t&1&&(M(0),c(1,yt,1,1,"AngleDownIcon",24)(2,vt,1,1,"AngleRightIcon",24),P()),t&2){let e=m(6);u(),r("ngIf",e.root),u(),r("ngIf",!e.root)}}function wt(t,a){}function kt(t,a){t&1&&c(0,wt,0,0,"ng-template",26),t&2&&r("data-pc-section","submenuicon")}function St(t,a){if(t&1&&(M(0),c(1,Ct,3,2,"ng-container",11)(2,kt,1,1,null,23),P()),t&2){let e=m(5);u(),r("ngIf",!e.submenuiconTemplate),u(),r("ngTemplateOutlet",e.submenuiconTemplate)}}function Tt(t,a){if(t&1&&(p(0,"a",15),c(1,ht,1,4,"span",16)(2,_t,2,3,"span",17)(3,It,1,3,"ng-template",null,2,U)(5,xt,1,2,"p-badge",18)(6,St,3,2,"ng-container",11),d()),t&2){let e=Q(4),i=m(3).$implicit,n=m();r("target",n.getItemProp(i,"target"))("ngClass",j(11,rt,n.getItemProp(i,"disabled"))),b("href",n.getItemProp(i,"url"),Se)("data-automationid",n.getItemProp(i,"automationId"))("data-pc-section","action")("tabindex",-1),u(),r("ngIf",n.getItemProp(i,"icon")),u(),r("ngIf",n.getItemProp(i,"escape"))("ngIfElse",e),u(3),r("ngIf",n.getItemProp(i,"badge")),u(),r("ngIf",n.isItemGroup(i))}}function Lt(t,a){if(t&1&&g(0,"span",19),t&2){let e=m(4).$implicit,i=m();r("ngClass",i.getItemProp(e,"icon"))("ngStyle",i.getItemProp(e,"iconStyle")),b("data-pc-section","icon")("tabindex",-1)}}function Mt(t,a){if(t&1&&(p(0,"span",29),ne(1),d()),t&2){let e=m(4).$implicit,i=m();u(),$e(i.getItemLabel(e))}}function Pt(t,a){if(t&1&&g(0,"span",30),t&2){let e=m(4).$implicit,i=m();r("innerHTML",i.getItemLabel(e),ee),b("data-pc-section","label")}}function $t(t,a){if(t&1&&g(0,"p-badge",22),t&2){let e=m(4).$implicit,i=m();r("styleClass",i.getItemProp(e,"badgeStyleClass"))("value",i.getItemProp(e,"badge"))}}function Et(t,a){t&1&&g(0,"AngleDownIcon",25),t&2&&b("data-pc-section","submenuicon")}function Dt(t,a){t&1&&g(0,"AngleRightIcon",25),t&2&&b("data-pc-section","submenuicon")}function Ft(t,a){if(t&1&&(M(0),c(1,Et,1,1,"AngleDownIcon",24)(2,Dt,1,1,"AngleRightIcon",24),P()),t&2){let e=m(6);u(),r("ngIf",e.root),u(),r("ngIf",!e.root)}}function At(t,a){}function Vt(t,a){t&1&&c(0,At,0,0,"ng-template",26),t&2&&r("data-pc-section","submenuicon")}function Kt(t,a){if(t&1&&(M(0),c(1,Ft,3,2,"ng-container",11)(2,Vt,1,1,null,23),P()),t&2){let e=m(5);u(),r("ngIf",!e.submenuiconTemplate),u(),r("ngTemplateOutlet",e.submenuiconTemplate)}}function Bt(t,a){if(t&1&&(p(0,"a",27),c(1,Lt,1,4,"span",16)(2,Mt,2,1,"span",28)(3,Pt,1,2,"ng-template",null,3,U)(5,$t,1,2,"p-badge",18)(6,Kt,3,2,"ng-container",11),d()),t&2){let e=Q(4),i=m(3).$implicit,n=m();r("routerLink",n.getItemProp(i,"routerLink"))("queryParams",n.getItemProp(i,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",n.getItemProp(i,"routerLinkActiveOptions")||Fe(20,dt))("target",n.getItemProp(i,"target"))("ngClass",j(21,rt,n.getItemProp(i,"disabled")))("fragment",n.getItemProp(i,"fragment"))("queryParamsHandling",n.getItemProp(i,"queryParamsHandling"))("preserveFragment",n.getItemProp(i,"preserveFragment"))("skipLocationChange",n.getItemProp(i,"skipLocationChange"))("replaceUrl",n.getItemProp(i,"replaceUrl"))("state",n.getItemProp(i,"state")),b("data-automationid",n.getItemProp(i,"automationId"))("tabindex",-1)("data-pc-section","action"),u(),r("ngIf",n.getItemProp(i,"icon")),u(),r("ngIf",n.getItemProp(i,"escape"))("ngIfElse",e),u(3),r("ngIf",n.getItemProp(i,"badge")),u(),r("ngIf",n.isItemGroup(i))}}function Rt(t,a){if(t&1&&(M(0),c(1,Tt,7,13,"a",13)(2,Bt,7,23,"a",14),P()),t&2){let e=m(2).$implicit,i=m();u(),r("ngIf",!i.getItemProp(e,"routerLink")),u(),r("ngIf",i.getItemProp(e,"routerLink"))}}function Ot(t,a){}function Ht(t,a){t&1&&c(0,Ot,0,0,"ng-template")}function zt(t,a){if(t&1&&(M(0),c(1,Ht,1,0,null,31),P()),t&2){let e=m(2).$implicit,i=m();u(),r("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",G(2,bt,e.item,i.root))}}function Nt(t,a){if(t&1){let e=D();p(0,"p-menubarSub",32),w("itemClick",function(n){f(e);let o=m(3);return h(o.itemClick.emit(n))})("itemMouseEnter",function(n){f(e);let o=m(3);return h(o.onItemMouseEnter(n))}),d()}if(t&2){let e=m(2).$implicit,i=m();r("itemTemplate",i.itemTemplate)("items",e.items)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("menuId",i.menuId)("activeItemPath",i.activeItemPath)("focusedItemId",i.focusedItemId)("level",i.level+1)("ariaLabelledBy",i.getItemLabelId(e))("inlineStyles",j(10,gt,i.isItemActive(e)?"flex":"none"))}}function qt(t,a){if(t&1){let e=D();p(0,"li",9,1)(2,"div",10),w("click",function(n){f(e);let o=m().$implicit,s=m();return h(s.onItemClick(n,o))})("mouseenter",function(n){f(e);let o=m().$implicit,s=m();return h(s.onItemMouseEnter({$event:n,processedItem:o}))}),c(3,Rt,3,2,"ng-container",11)(4,zt,2,5,"ng-container",11),d(),c(5,Nt,1,12,"p-menubarSub",12),d()}if(t&2){let e=m(),i=e.$implicit,n=e.index,o=m();K(o.getItemProp(i,"styleClass")),r("ngStyle",o.getItemProp(i,"style"))("ngClass",o.getItemClass(i))("tooltipOptions",o.getItemProp(i,"tooltipOptions")),b("id",o.getItemId(i))("data-pc-section","menuitem")("data-p-highlight",o.isItemActive(i))("data-p-focused",o.isItemFocused(i))("data-p-disabled",o.isItemDisabled(i))("aria-label",o.getItemLabel(i))("aria-disabled",o.isItemDisabled(i)||void 0)("aria-haspopup",o.isItemGroup(i)&&!o.getItemProp(i,"to")?"menu":void 0)("aria-expanded",o.isItemGroup(i)?o.isItemActive(i):void 0)("aria-level",o.level+1)("aria-setsize",o.getAriaSetSize())("aria-posinset",o.getAriaPosInset(n)),u(2),b("data-pc-section","content"),u(),r("ngIf",!o.itemTemplate),u(),r("ngIf",o.itemTemplate),u(),r("ngIf",o.isItemVisible(i)&&o.isItemGroup(i))}}function Zt(t,a){if(t&1&&c(0,ft,1,5,"li",6)(1,qt,6,21,"li",7),t&2){let e=a.$implicit,i=m();r("ngIf",i.isItemVisible(e)&&i.getItemProp(e,"separator")),u(),r("ngIf",i.isItemVisible(e)&&!i.getItemProp(e,"separator"))}}var Qt=["start"],jt=["end"],Gt=["item"],Ut=["menuicon"],Wt=["submenuicon"],Jt=["menubutton"],Xt=["rootmenu"],Yt=["*"],ei=(t,a)=>({"p-menubar p-component":!0,"p-menubar-mobile":t,"p-menubar-mobile-active":a});function ti(t,a){t&1&&ie(0)}function ii(t,a){if(t&1&&(p(0,"div",8),c(1,ti,1,0,"ng-container",9),d()),t&2){let e=m();u(),r("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function ni(t,a){t&1&&g(0,"BarsIcon")}function oi(t,a){}function ri(t,a){t&1&&c(0,oi,0,0,"ng-template")}function ai(t,a){if(t&1){let e=D();p(0,"a",10,2),w("click",function(n){f(e);let o=m();return h(o.menuButtonClick(n))})("keydown",function(n){f(e);let o=m();return h(o.menuButtonKeydown(n))}),c(2,ni,1,0,"BarsIcon",11)(3,ri,1,0,null,9),d()}if(t&2){let e=m();b("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation)("data-pc-section","button"),u(2),r("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),u(),r("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function si(t,a){t&1&&ie(0)}function mi(t,a){if(t&1&&(p(0,"div",12),c(1,si,1,0,"ng-container",9),d()),t&2){let e=m();u(),r("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function ui(t,a){t&1&&(p(0,"div",12),Pe(1),d())}var _e=(()=>{class t{autoHide;autoHideDelay;mouseLeaves=new Ie;mouseLeft$=this.mouseLeaves.pipe(ve(()=>xe(this.autoHideDelay)),ye(e=>this.autoHide&&e));static \u0275fac=function(i){return new(i||t)};static \u0275prov=X({token:t,factory:t.\u0275fac})}return t})(),li=(()=>{class t extends be{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new C;itemMouseEnter=new C;menuFocus=new C;menuBlur=new C;menuKeydown=new C;menubarViewChild;mouseLeaveSubscriber;menubarService=Y(_e);ngOnInit(){super.ngOnInit(),this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,i){this.getItemProp(i,"command",{originalEvent:e,item:i.item}),this.itemClick.emit({originalEvent:e,processedItem:i,isFocus:!0})}getItemProp(e,i,n=null){return e&&e.item?pe(e.item[i],n):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemKey(e){return this.getItemId(e)}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemClass(e){return N(z({},this.getItemProp(e,"class")),{"p-menubar-item":!0,"p-menubar-item-active":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)})}getItemLabel(e){return this.getItemProp(e,"label")}getSeparatorItemClass(e){return N(z({},this.getItemProp(e,"class")),{"p-menubar-separator":!0})}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){if(this.activeItemPath)return this.activeItemPath.some(i=>i.key===e.key)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return S(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(i=>this.isItemVisible(i)&&this.getItemProp(i,"separator")).length+1}onItemMouseLeave(){this.menubarService.mouseLeaves.next(!0)}onItemMouseEnter(e){if(this.autoDisplay){this.menubarService.mouseLeaves.next(!1);let{event:i,processedItem:n}=e;this.itemMouseEnter.emit({originalEvent:i,processedItem:n})}}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=A(t)))(n||t)}})();static \u0275cmp=L({type:t,selectors:[["p-menubarSub"],["p-menubarsub"]],viewQuery:function(i,n){if(i&1&&Z(ct,7),i&2){let o;x(o=y())&&(n.menubarViewChild=o.first)}},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",k],autoZIndex:[2,"autoZIndex","autoZIndex",k],baseZIndex:[2,"baseZIndex","baseZIndex",B],mobileActive:[2,"mobileActive","mobileActive",k],autoDisplay:[2,"autoDisplay","autoDisplay",k],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",B],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[te,V],decls:3,vars:12,consts:[["menubar",""],["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["role","menubar",3,"focus","blur","keydown","ngClass","tabindex","ngStyle"],["ngFor","",3,"ngForOf"],["role","separator",3,"style","ngClass",4,"ngIf"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","class","tooltipOptions",4,"ngIf"],["role","separator",3,"ngClass"],["role","menuitem","pTooltip","",3,"ngStyle","ngClass","tooltipOptions"],[1,"p-menubar-item-content",3,"click","mouseenter"],[4,"ngIf"],[3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","ariaLabelledBy","inlineStyles","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"target","ngClass",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["pRipple","",3,"target","ngClass"],["class","p-menubar-item-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-menubar-item-label",3,"id",4,"ngIf","ngIfElse"],[3,"styleClass","value",4,"ngIf"],[1,"p-menubar-item-icon",3,"ngClass","ngStyle"],[1,"p-menubar-item-label",3,"id"],[1,"p-menubar-item-label",3,"innerHTML","id"],[3,"styleClass","value"],[4,"ngTemplateOutlet"],["class","p-menubar-submenu-icon",4,"ngIf"],[1,"p-menubar-submenu-icon"],[3,"data-pc-section"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngClass","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["class","p-menubar-item-label",4,"ngIf","ngIfElse"],[1,"p-menubar-item-label"],[1,"p-menubar-item-label",3,"innerHTML"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","ariaLabelledBy","inlineStyles"]],template:function(i,n){if(i&1){let o=D();p(0,"ul",4,0),w("focus",function(l){return f(o),h(n.menuFocus.emit(l))})("blur",function(l){return f(o),h(n.menuBlur.emit(l))})("keydown",function(l){return f(o),h(n.menuKeydown.emit(l))}),c(2,Zt,2,2,"ng-template",5),d()}i&2&&(r("ngClass",G(9,pt,!n.root,n.root))("tabindex",0)("ngStyle",n.inlineStyles),b("data-pc-section","menu")("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy)("id",n.root?n.menuId:null)("aria-activedescendant",n.focusedItemId),u(2),r("ngForOf",n.items))},dependencies:[t,me,oe,Be,re,se,ae,ue,He,ze,Je,he,Xe,Ue,We,ge,je,de],encapsulation:2})}return t})(),at=(()=>{class t extends be{document;platformId;el;renderer;cd;menubarService;set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}style;styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!1;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new C;onBlur=new C;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches;outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=q([]);number=q(0);focusedItemInfo=q({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=Y(ot);_model;get visibleItems(){let e=this.activeItemPath().find(i=>i.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${S(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,i,n,o,s,l){super(),this.document=e,this.platformId=i,this.el=n,this.renderer=o,this.cd=s,this.menubarService=l,Ve(()=>{let _=this.activeItemPath();S(_)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}ngOnInit(){super.ngOnInit(),this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>this.unbindOutsideClickListener()),this.id=this.id||qe("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,i=0,n={},o=""){let s=[];return e&&e.forEach((l,_)=>{let v=(o!==""?o+"_":"")+_,T={item:l,index:_,level:i,key:v,parent:n,parentKey:o};T.items=this.createProcessedItems(l.items,i+1,T,v),s.push(T)}),s}bindMatchMediaListener(){if(W(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches=e.matches,this.matchMediaListener=()=>{this.queryMatches=e.matches,this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,i){return e?pe(e[i]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){let{originalEvent:i,processedItem:n}=e,o=this.isProcessedItemGroup(n),s=R(n.parent);if(this.isSelected(n)){let{index:_,key:v,level:T,parentKey:O,item:H}=n;this.activeItemPath.set(this.activeItemPath().filter(F=>v!==F.key&&v.startsWith(F.key))),this.focusedItemInfo.set({index:_,level:T,parentKey:O,item:H}),this.dirty=!s,E(this.rootmenu.menubarViewChild.nativeElement)}else if(o)this.onItemChange(e);else{let _=s?n:this.activeItemPath().find(v=>v.parentKey==="");this.hide(i),this.changeFocusedItemIndex(i,_?_.index:-1),this.mobileActive=!1,E(this.rootmenu.menubarViewChild.nativeElement)}}onItemMouseEnter(e){le()||this.mobileActive||this.onItemChange(e)}changeFocusedItemIndex(e,i){let n=this.findVisibleItem(i);if(this.focusedItemInfo().index!==i){let o=this.focusedItemInfo();this.focusedItemInfo.set(N(z({},o),{item:n.item,index:i})),this.scrollInView()}}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedItemId,n=J(this.rootmenu.el.nativeElement,`li[id="${i}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e){let{processedItem:i,isFocus:n}=e;if(R(i))return;let{index:o,key:s,level:l,parentKey:_,items:v,item:T}=i,O=S(v),H=this.activeItemPath().filter(F=>F.parentKey!==_&&F.parentKey!==s);O&&H.push(i),this.focusedItemInfo.set({index:o,level:l,parentKey:_,item:T}),this.activeItemPath.set(H),O&&(this.dirty=!0),n&&E(this.rootmenu.menubarViewChild.nativeElement)}toggle(e){this.mobileActive?(this.mobileActive=!1,fe.clear(this.rootmenu.el.nativeElement),this.hide()):(this.mobileActive=!0,fe.set("menu",this.rootmenu.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,i){this.mobileActive&&setTimeout(()=>{E(this.menubutton.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),i&&E(this.rootmenu?.menubarViewChild.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),E(this.rootmenu?.menubarViewChild.nativeElement)}onMenuFocus(e){this.focused=!0;let i=this.findVisibleItem(this.findFirstFocusedItemIndex()),n=this.focusedItemInfo().index!==-1?this.focusedItemInfo():{index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:i?.item};this.focusedItemInfo.set(n),this.onFocus.emit(e)}onMenuBlur(e){this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e)}onKeyDown(e){let i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&Ne(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return S(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&S(e.items)}isSelected(e){return this.activeItemPath().some(i=>i.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&S(e.items)}searchItems(e,i){this.searchValue=(this.searchValue||"")+i;let n=-1,o=!1;return this.focusedItemInfo().index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(s=>this.isItemMatched(s)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(s=>this.isItemMatched(s)):n+this.focusedItemInfo().index):n=this.visibleItems.findIndex(s=>this.isItemMatched(s)),n!==-1&&(o=!0),n===-1&&this.focusedItemInfo().index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),o}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let i=this.visibleItems[this.focusedItemInfo().index];if(i?R(i.parent):null)this.isProccessedItemGroup(i)&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo.set({index:-1,parentKey:i.key,item:i.item}),this.onArrowRightKey(e));else{let o=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onArrowRightKey(e){let i=this.visibleItems[this.focusedItemInfo().index];if(i?this.activeItemPath().find(o=>o.key===i.parentKey):null)this.isProccessedItemGroup(i)&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo.set({index:-1,parentKey:i.key,item:i.item}),this.onArrowDownKey(e));else{let o=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onArrowUpKey(e){let i=this.visibleItems[this.focusedItemInfo().index];if(R(i.parent)){if(this.isProccessedItemGroup(i)){this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo.set({index:-1,parentKey:i.key,item:i.item});let s=this.findLastItemIndex();this.changeFocusedItemIndex(e,s)}}else{let o=this.activeItemPath().find(s=>s.key===i.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:o?o.parentKey:"",item:i.item}),this.searchValue="",this.onArrowLeftKey(e);let s=this.activeItemPath().filter(l=>l.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(s)}else{let s=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,s)}}e.preventDefault()}onArrowLeftKey(e){let i=this.visibleItems[this.focusedItemInfo().index],n=i?this.activeItemPath().find(o=>o.key===i.parentKey):null;if(n){this.onItemChange({originalEvent:e,processedItem:n});let o=this.activeItemPath().filter(s=>s.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(o),e.preventDefault()}else{let o=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let i=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(i)&&this.onItemChange({originalEvent:e,processedItem:i})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let i=J(this.rootmenu.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=i&&J(i,'a[data-pc-section="action"]');n?n.click():i&&i.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return ce(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let i=e>0?ce(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return i>-1?i:e}findNextItemIndex(e){let i=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return i>-1?i+e+1:e}bindResizeListener(){W(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{le()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){W(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let i=this.rootmenu.el.nativeElement!==e.target&&!this.rootmenu.el.nativeElement.contains(e.target),n=this.mobileActive&&this.menubutton.nativeElement!==e.target&&!this.menubutton.nativeElement.contains(e.target);i&&(n?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}ngOnDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(I(Ke),I(ke),I(we),I(Te),I(Ae),I(_e))};static \u0275cmp=L({type:t,selectors:[["p-menubar"]],contentQueries:function(i,n,o){if(i&1&&($(o,Qt,4),$(o,jt,4),$(o,Gt,4),$(o,Ut,4),$(o,Wt,4),$(o,Ze,4)),i&2){let s;x(s=y())&&(n.startTemplate=s.first),x(s=y())&&(n.endTemplate=s.first),x(s=y())&&(n.itemTemplate=s.first),x(s=y())&&(n.menuIconTemplate=s.first),x(s=y())&&(n.submenuIconTemplate=s.first),x(s=y())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&(Z(Jt,5),Z(Xt,5)),i&2){let o;x(o=y())&&(n.menubutton=o.first),x(o=y())&&(n.rootmenu=o.first)}},inputs:{model:"model",style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",k],baseZIndex:[2,"baseZIndex","baseZIndex",B],autoDisplay:[2,"autoDisplay","autoDisplay",k],autoHide:[2,"autoHide","autoHide",k],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",B],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[De([_e,ot]),te,V],ngContentSelectors:Yt,decls:8,vars:26,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"ngClass","ngStyle"],["class","p-menubar-start",4,"ngIf"],["tabindex","0","role","button","class","p-menubar-button",3,"click","keydown",4,"ngIf"],[3,"itemClick","menuFocus","menuBlur","menuKeydown","itemMouseEnter","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","ariaLabel","ariaLabelledBy","focusedItemId","submenuiconTemplate","activeItemPath"],["class","p-menubar-end",4,"ngIf","ngIfElse"],[1,"p-menubar-start"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",1,"p-menubar-button",3,"click","keydown"],[4,"ngIf"],[1,"p-menubar-end"]],template:function(i,n){if(i&1){let o=D();Me(),p(0,"div",3),c(1,ii,2,1,"div",4)(2,ai,4,7,"a",5),p(3,"p-menubarSub",6,0),w("itemClick",function(l){return f(o),h(n.onItemClick(l))})("menuFocus",function(l){return f(o),h(n.onMenuFocus(l))})("menuBlur",function(l){return f(o),h(n.onMenuBlur(l))})("menuKeydown",function(l){return f(o),h(n.onKeyDown(l))})("itemMouseEnter",function(l){return f(o),h(n.onItemMouseEnter(l))}),d(),c(5,mi,2,1,"div",7)(6,ui,2,0,"ng-template",null,1,U),d()}if(i&2){let o=Q(7);K(n.styleClass),r("ngClass",G(23,ei,n.queryMatches,n.mobileActive))("ngStyle",n.style),b("data-pc-section","root")("data-pc-name","menubar"),u(),r("ngIf",n.startTemplate||n._startTemplate),u(),r("ngIf",n.model&&n.model.length>0),u(),r("items",n.processedItems)("itemTemplate",n.itemTemplate)("menuId",n.id)("root",!0)("baseZIndex",n.baseZIndex)("autoZIndex",n.autoZIndex)("mobileActive",n.mobileActive)("autoDisplay",n.autoDisplay)("ariaLabel",n.ariaLabel)("ariaLabelledBy",n.ariaLabelledBy)("focusedItemId",n.focused?n.focusedItemId:void 0)("submenuiconTemplate",n.submenuIconTemplate||n._submenuIconTemplate)("activeItemPath",n.activeItemPath()),u(2),r("ngIf",n.endTemplate||n._endTemplate)("ngIfElse",o)}},dependencies:[me,oe,re,se,ae,ue,li,he,nt,ge,de],encapsulation:2,changeDetection:0})}return t})();var st=class t{constructor(a,e,i){this.router=a;this.authService=e;this.bossService=i;let n=localStorage.getItem("boss_id");n&&this.bossService.getBossById(n).subscribe(o=>{o&&(this.bossName=`${o.name} ${o.surname}`)})}bossName="";topItems=[{}];leftItems=[{label:"Worksites",icon:"pi pi-building",routerLink:["/worksites"],style:{color:"black"}},{label:"Workers",icon:"pi pi-prime",routerLink:["/workers"],style:{color:"black"}},{label:"Helmets",icon:"pi pi-exclamation-triangle",routerLink:["/helmets"],style:{color:"black"}},{label:"Reports",icon:"pi pi-file-pdf",routerLink:["/readings"],style:{color:"black"}},{label:"Anomalies",icon:"pi pi-bell",routerLink:["/anomalies"],style:{color:"black"}},{label:"Attendances",icon:"pi pi-comments",routerLink:["/attendances"],style:{color:"black"}},{label:"Bosses",icon:"pi pi-megaphone",routerLink:["/bosses"],style:{color:"black"}}];logout(){console.log("Logout"),this.authService.logout()}static \u0275fac=function(e){return new(e||t)(I(Oe),I(et),I(tt))};static \u0275cmp=L({type:t,selectors:[["app-dashboard"]],decls:12,vars:2,consts:[[1,"layout"],[1,"top-navbar"],[1,"rowNav"],[1,"columnNav","logo-container"],["src","assets/images/bannerLogo.png","alt","Logo",1,"top-logo"],[1,"columnNav","button-container"],["icon","pi pi-user","severity","contrast",1,"logout-button",3,"label"],["icon","pi pi-sign-out","label","Logout",1,"logout-button",3,"click"],[1,"sidebar"],[1,"menuLeft",3,"model"],[1,"content"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),g(4,"img",4),d(),p(5,"div",5),g(6,"p-button",6),p(7,"p-button",7),w("click",function(){return i.logout()}),d()()()(),p(8,"div",8),g(9,"p-menubar",9),d(),p(10,"div",10),g(11,"router-outlet"),d()()),e&2&&(u(6),r("label",i.bossName),u(3),r("model",i.leftItems))},dependencies:[at,Re,Ye],styles:[`.layout{display:grid;grid-template-rows:60px auto;grid-template-columns:15% auto;height:100vh}.p-menubar-item-link{color:#000!important}.top-navbar{grid-column:span 2;background-color:#f8f9fa;color:#fff;align-items:center;box-shadow:0 2px 4px #0000001a;z-index:1000}.menuTop{width:100%;display:flex;justify-content:space-between;--p-menubar-background: none;--p-menubar-border-color: none;--p-menubar-item-focus-background: #34d399}.top-logo{width:15%;height:auto}.sidebar{grid-row:span 2;background-color:#f8f9fa;box-shadow:2px 0 5px #0000001a;display:flex;flex-direction:column;align-items:center;padding-top:1rem;z-index:100}.menuLeft{width:100%;--p-menubar-background: none;--p-menubar-border-color: none;--p-menubar-root-color: black;--p-menubar-item-focus-background: #34d399}.banner{width:80%;height:auto;margin-bottom:1rem}.content{padding:1rem;overflow-y:auto}@media (max-width: 768px){.layout{grid-template-rows:60px auto;grid-template-columns:100%}.sidebar{display:none}.content{grid-column:span 1;margin-left:0}}@media (max-width: 480px){.top-navbar{padding:.5rem}.top-logo{width:30px}}.colorBlack{color:#000}.loader{width:112px;height:112px}.box1,.box2,.box3{border:16px solid #000000;box-sizing:border-box;position:absolute;display:block}.box1{width:112px;height:48px;margin-top:64px;margin-left:0;animation:abox1 4s 1s forwards ease-in-out infinite}.box2{width:48px;height:48px;margin-top:0;margin-left:0;animation:abox2 4s 1s forwards ease-in-out infinite}.box3{width:48px;height:48px;margin-top:0;margin-left:64px;animation:abox3 4s 1s forwards ease-in-out infinite}@keyframes abox1{0%{width:112px;height:48px;margin-top:64px;margin-left:0}12.5%{width:48px;height:48px;margin-top:64px;margin-left:0}25%{width:48px;height:48px;margin-top:64px;margin-left:0}37.5%{width:48px;height:48px;margin-top:64px;margin-left:0}50%{width:48px;height:48px;margin-top:64px;margin-left:0}62.5%{width:48px;height:48px;margin-top:64px;margin-left:0}75%{width:48px;height:112px;margin-top:0;margin-left:0}87.5%{width:48px;height:48px;margin-top:0;margin-left:0}to{width:48px;height:48px;margin-top:0;margin-left:0}}@keyframes abox2{0%{width:48px;height:48px;margin-top:0;margin-left:0}12.5%{width:48px;height:48px;margin-top:0;margin-left:0}25%{width:48px;height:48px;margin-top:0;margin-left:0}37.5%{width:48px;height:48px;margin-top:0;margin-left:0}50%{width:112px;height:48px;margin-top:0;margin-left:0}62.5%{width:48px;height:48px;margin-top:0;margin-left:64px}75%{width:48px;height:48px;margin-top:0;margin-left:64px}87.5%{width:48px;height:48px;margin-top:0;margin-left:64px}to{width:48px;height:48px;margin-top:0;margin-left:64px}}@keyframes abox3{0%{width:48px;height:48px;margin-top:0;margin-left:64px}12.5%{width:48px;height:48px;margin-top:0;margin-left:64px}25%{width:48px;height:112px;margin-top:0;margin-left:64px}37.5%{width:48px;height:48px;margin-top:64px;margin-left:64px}50%{width:48px;height:48px;margin-top:64px;margin-left:64px}62.5%{width:48px;height:48px;margin-top:64px;margin-left:64px}75%{width:48px;height:48px;margin-top:64px;margin-left:64px}87.5%{width:48px;height:48px;margin-top:64px;margin-left:64px}to{width:112px;height:48px;margin-top:64px;margin-left:0}}.columnNav{float:left}.logout-padding{padding-left:100px}.float-rightNav{float:right;margin-right:-20px}.p-menubar-root-list{padding-right:40px!important;font-size:18px}.rowNav{display:flex;justify-content:space-between;align-items:center;height:100%;padding:0 1rem}.logo-container{flex-grow:1}.button-container{flex-shrink:0}.logout-button{margin-right:10px;padding:.5rem 1rem;color:#fff;border-radius:4px;font-size:16px;transition:background-color .3s ease}@media (max-width: 768px){.logout-button{font-size:14px;padding:.4rem .8rem}}@media (max-width: 480px){.logout-button{font-size:12px;padding:.3rem .6rem}}.p-menubar-mobile .p-menubar-root-list{--p-menubar-submenu-background: none;--p-menubar-submenu-border-color: none}
`],encapsulation:2})};export{st as a};
