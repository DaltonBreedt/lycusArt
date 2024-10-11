import{h,Host}from"@stencil/core";import{formBusy}from"@store/form/getters";export class ScCartSubmit{constructor(){this.busy=void 0}render(){return h(Host,{class:{"is-busy":formBusy()||this.busy,"is-disabled":formBusy()||this.busy},onClick:()=>(this.busy=!0,!0)},h("slot",null))}static get is(){return"sc-cart-submit"}static get originalStyleUrls(){return{$:["sc-cart-submit.scss"]}}static get styleUrls(){return{$:["sc-cart-submit.css"]}}static get properties(){return{busy:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is the cart busy"},attribute:"busy",reflect:!1}}}}