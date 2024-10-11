import{c as createStore}from"./index3.js";import"./google.js";import{i as isProductVariantOptionSoldOut,a as isProductVariantOptionMissing,g as getSerializedState}from"./utils.js";import{g as getVariantFromValues}from"./util.js";import{s as speak}from"./index2.js";const productViewed=(t,i,e=1)=>{var o;const a=new CustomEvent("scProductViewed",{detail:{id:null==t?void 0:t.id,name:null==t?void 0:t.name,price:i,permalink:null==t?void 0:t.permalink,prices:null==t?void 0:t.prices,variant_options:null===(o=null==t?void 0:t.variant_options)||void 0===o?void 0:o.data,product_collections:null==t?void 0:t.product_collections,quantity:e},bubbles:!0});document.dispatchEvent(a)},availablePrices=t=>{var i;return((null===(i=state[t])||void 0===i?void 0:i.prices)||[]).filter((t=>!(null==t?void 0:t.archived))).sort(((t,i)=>(null==t?void 0:t.position)-(null==i?void 0:i.position)))},getProduct=t=>{var i;return null!==(i=state[t])&&void 0!==i?i:null},isStockNeedsToBeChecked=t=>{var i,e,o,a;return!(!(null===(e=null===(i=null==state?void 0:state[t])||void 0===i?void 0:i.product)||void 0===e?void 0:e.stock_enabled)||(null===(a=null===(o=null==state?void 0:state[t])||void 0===o?void 0:o.product)||void 0===a?void 0:a.allow_out_of_stock_purchases))},isOptionSoldOut=(t,i,e)=>isProductVariantOptionSoldOut(i,e,state[t].variantValues,state[t].product),isOptionMissing=(t,i,e)=>isProductVariantOptionMissing(i,e,state[t].variantValues,state[t].product),isProductOutOfStock=t=>{var i,e,o,a;return!!isStockNeedsToBeChecked(t)&&((null===(e=null===(i=null==state?void 0:state[t])||void 0===i?void 0:i.selectedVariant)||void 0===e?void 0:e.id)?(null===(a=state[t].selectedVariant)||void 0===a?void 0:a.available_stock)<=0:(null===(o=state[t].product)||void 0===o?void 0:o.available_stock)<=0)},isSelectedVariantMissing=t=>{var i,e,o;return!!(null===(e=null===(i=null==state?void 0:state[t])||void 0===i?void 0:i.variants)||void 0===e?void 0:e.length)&&void 0===(null===(o=getVariantFromValues({variants:state[t].variants,values:state[t].variantValues}))||void 0===o?void 0:o.id)},getDefaultState=()=>{const{product:t={}}=getSerializedState();return Object.values(t).reduce(((t,i)=>{const{selectedPrice:e,product:o,selectedVariant:a}=i||{},l={...i,quantity:1,total:null,dialog:null,busy:!1,error:null,adHocAmount:(null==e?void 0:e.amount)||null,disabled:(null==e?void 0:e.archived)||(null==o?void 0:o.archived),line_item:{price_id:null==e?void 0:e.id,quantity:1,...(null==e?void 0:e.ad_hoc)?{ad_hoc_amount:null==e?void 0:e.amount}:{},...(null==a?void 0:a.id)?{variant_id:null==a?void 0:a.id}:{}},variantValues:{...(null==a?void 0:a.option_1)?{option_1:null==a?void 0:a.option_1}:{},...(null==a?void 0:a.option_2)?{option_2:null==a?void 0:a.option_2}:{},...(null==a?void 0:a.option_3)?{option_3:null==a?void 0:a.option_3}:{}}};return t[o.id]=l,t}),{})||{}},availableSubscriptionPrices=t=>(availablePrices(t)||[]).filter((t=>null==t?void 0:t.recurring_interval)).sort(((t,i)=>(null==t?void 0:t.position)-(null==i?void 0:i.position))),availableNonSubscriptionPrices=t=>(availablePrices(t)||[]).filter((t=>!(null==t?void 0:t.recurring_interval))).sort(((t,i)=>(null==t?void 0:t.position)-(null==i?void 0:i.position))),getters=Object.freeze({__proto__:null,availablePrices:availablePrices,getProduct:getProduct,isStockNeedsToBeChecked:isStockNeedsToBeChecked,isOptionSoldOut:isOptionSoldOut,isOptionMissing:isOptionMissing,isProductOutOfStock:isProductOutOfStock,isSelectedVariantMissing:isSelectedVariantMissing,getDefaultState:getDefaultState,availableSubscriptionPrices:availableSubscriptionPrices,availableNonSubscriptionPrices:availableNonSubscriptionPrices}),defaultState=getDefaultState();Object.values(defaultState).filter((t=>null==t?void 0:t.isProductPage)).forEach((t=>{var i;(null===(i=null==t?void 0:t.product)||void 0===i?void 0:i.id)&&productViewed(null==t?void 0:t.product,null==t?void 0:t.selectedPrice,null==t?void 0:t.quantity)}));const store=createStore(defaultState,((t,i)=>JSON.stringify(t)!==JSON.stringify(i))),{state:state,onChange:onChange,on:on,dispose:dispose,forceUpdate:forceUpdate}=store,setProduct=(t,i)=>{t&&(state[t]={...state[t],...i})};on("set",((t,i,e)=>{var o,a,l,d;(null===(o=null==i?void 0:i.selectedPrice)||void 0===o?void 0:o.id)!==(null===(a=null==e?void 0:e.selectedPrice)||void 0===a?void 0:a.id)&&updateSelectedPrice(t,i),(null===(l=null==i?void 0:i.selectedVariant)||void 0===l?void 0:l.id)!==(null===(d=null==e?void 0:e.selectedVariant)||void 0===d?void 0:d.id)&&handleStockWithSelectedVariant(t),(!e||["selectedPrice","adHocAmount","quantity","selectedVariant"].some((t=>JSON.stringify(i[t])!==JSON.stringify(e[t]))))&&setLineItem(t),(!e||JSON.stringify(null==i?void 0:i.variantValues)!==JSON.stringify(null==e?void 0:e.variantValues))&&updateSelectedVariant(t,i)}));const updateSelectedVariant=(t,i)=>{const e=getVariantFromValues({variants:state[t].variants,values:null==i?void 0:i.variantValues});e&&setProduct(t,{selectedVariant:e})},handleStockWithSelectedVariant=t=>{var i,e,o;state[t].selectedVariant&&isStockNeedsToBeChecked&&(null===(i=state[t])||void 0===i?void 0:i.selectedVariant.available_stock)<(null===(e=state[t])||void 0===e?void 0:e.quantity)&&(state[t].quantity=(null===(o=state[t])||void 0===o?void 0:o.selectedVariant.available_stock)||1,speak(wp.i18n.sprintf(wp.i18n.__("There are just %d items left in stock, and the quantity has been adjusted to %d.","surecart"),state[t].quantity,state[t].quantity),"assertive"))},updateSelectedPrice=(t,i)=>{var e,o,a,l;setProduct(t,{total:state[t].adHocAmount||(null===(e=null==i?void 0:i.selectedPrice)||void 0===e?void 0:e.amount)||0,adHocAmount:null===(o=null==i?void 0:i.selectedPrice)||void 0===o?void 0:o.amount,disabled:(null===(a=null==i?void 0:i.selectedPrice)||void 0===a?void 0:a.archived)||(null===(l=state[t].product)||void 0===l?void 0:l.archived)})},setLineItem=t=>{var i,e,o,a,l,d,n,s;setProduct(t,{line_item:{price_id:null===(e=null===(i=state[t])||void 0===i?void 0:i.selectedPrice)||void 0===e?void 0:e.id,quantity:Math.max((null===(a=null===(o=state[t])||void 0===o?void 0:o.selectedPrice)||void 0===a?void 0:a.ad_hoc)?1:state[t].quantity,1),...(null===(d=null===(l=state[t])||void 0===l?void 0:l.selectedPrice)||void 0===d?void 0:d.ad_hoc)?{ad_hoc_amount:null===(n=state[t])||void 0===n?void 0:n.adHocAmount}:{},variant:null===(s=state[t].selectedVariant)||void 0===s?void 0:s.id}})};export{on as a,setProduct as b,isSelectedVariantMissing as c,dispose as d,isOptionSoldOut as e,forceUpdate as f,getters as g,isOptionMissing as h,isProductOutOfStock as i,availablePrices as j,onChange as o,state as s};