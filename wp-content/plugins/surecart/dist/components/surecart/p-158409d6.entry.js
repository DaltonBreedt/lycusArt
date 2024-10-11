import{r as i,h as t}from"./p-cc7ce8c7.js";import{c as o}from"./p-3a6d77cf.js";import{c as d}from"./p-5ec5df35.js";import{s as n,a as s}from"./p-24f06282.js";import{u as r}from"./p-f9c1f513.js";import"./p-18e45a13.js";import"./p-1c2e2695.js";import"./p-4d73f82a.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-830ab1a3.js";import"./p-a3a138d6.js";import"./p-7ef0f71c.js";import"./p-50da3ba3.js";import"./p-c27fae79.js";const e={expand:["line_items","line_item.price","price.product","customer","customer.shipping_address","payment_intent","discount","discount.promotion","discount.coupon","shipping_address","tax_identifier"]};const l=class{constructor(t){i(this,t);this.quantity=1;this.priceId=undefined;this.variantId=undefined;this.mode="live";this.formId=undefined;this.busy=undefined;this.error=undefined}getLineItem(){var i,t,o;const d=(((t=(i=n===null||n===void 0?void 0:n.checkout)===null||i===void 0?void 0:i.line_items)===null||t===void 0?void 0:t.data)||[]).find((i=>{var t,o,d;if(this.variantId){return((t=i.variant)===null||t===void 0?void 0:t.id)===this.variantId&&((o=i.price)===null||o===void 0?void 0:o.id)===this.priceId}return((d=i.price)===null||d===void 0?void 0:d.id)===this.priceId}));if(!(d===null||d===void 0?void 0:d.id)){return false}return{id:d===null||d===void 0?void 0:d.id,price_id:(o=d===null||d===void 0?void 0:d.price)===null||o===void 0?void 0:o.id,quantity:d===null||d===void 0?void 0:d.quantity}}async addToCart(){const{price:i}=await this.form.getFormJson();try{r("FETCH");n.checkout=await this.addOrUpdateLineItem({...!!i?{ad_hoc_amount:parseInt(i)||null}:{},...!!this.variantId?{variant_id:this.variantId||null}:{}});r("RESOLVE");s.set("cart",{...s.state.cart,...{open:true}})}catch(i){r("REJECT");console.error(i);this.error=(i===null||i===void 0?void 0:i.message)||wp.i18n.__("Something went wrong","surecart")}}async addOrUpdateLineItem(i={}){var t,s;let r=this.getLineItem();let l=o(((t=n===null||n===void 0?void 0:n.checkout)===null||t===void 0?void 0:t.line_items)||[]);return await d({id:(s=n===null||n===void 0?void 0:n.checkout)===null||s===void 0?void 0:s.id,data:{live_mode:this.mode==="live",line_items:[...(l||[]).map((t=>{const o=this.variantId?t.price_id===this.priceId&&t.variant_id===this.variantId:t.price_id===this.priceId;if(o){return{...t,...!!(i===null||i===void 0?void 0:i.ad_hoc_amount)?{ad_hoc_amount:i===null||i===void 0?void 0:i.ad_hoc_amount}:{},...!!(i===null||i===void 0?void 0:i.variant_id)?{variant_id:i===null||i===void 0?void 0:i.variant_id}:{},quantity:!(t===null||t===void 0?void 0:t.ad_hoc_amount)?(t===null||t===void 0?void 0:t.quantity)+1:1}}return t})),...!r?[{price_id:this.priceId,variant_id:this.variantId,...!!(i===null||i===void 0?void 0:i.ad_hoc_amount)?{ad_hoc_amount:i===null||i===void 0?void 0:i.ad_hoc_amount}:{},quantity:1}]:[]]},query:{...e,form_id:this.formId}})}render(){return t("sc-form",{ref:i=>this.form=i,onScSubmit:()=>{this.addToCart()}},this.error&&t("sc-alert",{open:!!this.error,type:"danger"},t("span",{slot:"title"},wp.i18n.__("Error","surecart")),this.error),t("slot",null))}};l.style="sc-cart-form { display: inline-block }";export{l as sc_cart_form};
//# sourceMappingURL=p-158409d6.entry.js.map