__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=[r(d[0]).KEYS.addFirstPhoto,r(d[0]).KEYS.connectToFacebook,r(d[0]).KEYS.importContacts,r(d[0]).KEYS.addPhone,r(d[0]).KEYS.editProfile,r(d[0]).KEYS.editProfilePhoto];var o=r(d[11]).withRouter(r(d[12]).connect(function(t){var o;const s=r(d[9]).getViewer(t);return{canFBConnect:r(d[10]).shouldDisplayFacebookConnect(t),canImportContacts:t.contactImport.canImportContacts,hasName:''!==(null===s||void 0===s?void 0:s.fullName),hasPhoneNumber:null===s||void 0===s?void 0:s.hasPhoneNumber,hasProfilePic:null===s||void 0===s?void 0:s.hasProfilePic,isNew:null===s||void 0===s?void 0:s.isNew,profilePicUploadIsInFlight:t.users.profilePicUploadIsInFlight,viewerAllowsContactsSync:null===(o=t.settings.privacyAndSecurityData)||void 0===o?void 0:o.allowContactsSync.value}})(r(d[13]).withConnectedLifecycleLogging('NewUserActivatorsUnit')(class extends a(d[5]).Component{constructor(...t){super(...t),this.$NewUserActivatorsUnit1=(()=>{this.props.history.push(r(d[1]).PHONE_CONFIRM_PATH)}),this.$NewUserActivatorsUnit2=(()=>{r(d[2]).redirectToFBOAuth(this.props.history.location.pathname,'activatorUnit')}),this.$NewUserActivatorsUnit3=(()=>{this.props.history.push(r(d[1]).PROFILE_EDIT_PATH)}),this.$NewUserActivatorsUnit4=(t=>{this.$NewUserActivatorsUnit5&&this.$NewUserActivatorsUnit5.handleEditProfilePic(t)}),this.$NewUserActivatorsUnit6=(()=>{this.props.history.push(r(d[1]).DISCOVER_PEOPLE_CONTACTS_PATH)})}$NewUserActivatorsUnit7(t){switch(t){case r(d[0]).KEYS.addFirstPhoto:if(this.props.onFirstPhotoUpload)return this.props.onFirstPhotoUpload;break;case r(d[0]).KEYS.addPhone:return this.$NewUserActivatorsUnit1;case r(d[0]).KEYS.connectToFacebook:return this.$NewUserActivatorsUnit2;case r(d[0]).KEYS.editProfilePhoto:return this.$NewUserActivatorsUnit4;case r(d[0]).KEYS.editProfile:return this.$NewUserActivatorsUnit3;case r(d[0]).KEYS.importContacts:return this.$NewUserActivatorsUnit6}return i(d[3])}$NewUserActivatorsUnit8(t){const{canFBConnect:o,canImportContacts:s,hasName:n,hasPhoneNumber:c,hasProfilePic:l,module:h,viewerAllowsContactsSync:u}=this.props;switch(t){case r(d[0]).KEYS.addFirstPhoto:return r(d[4]).isMobile()&&h===r(d[0]).MODULES.profile;case r(d[0]).KEYS.addPhone:return!c;case r(d[0]).KEYS.connectToFacebook:return o;case r(d[0]).KEYS.editProfile:return!n;case r(d[0]).KEYS.editProfilePhoto:return!l;case r(d[0]).KEYS.importContacts:return s&&!u;default:return!1}}render(){const{className:o,fallbackComponent:s,isNew:n}=this.props;if(null==n||!1===n)return void 0!==s?s:null;const c=t.reduce((t,o)=>{const s=r(d[0]).KEY_UNIT_MAPPING[o];return this.$NewUserActivatorsUnit8(o)&&t.push(a(d[5]).createElement(r(d[6]).ActivatorCard,{bodyText:s.bodyText,buttonText:s.buttonText,headerText:s.headerText,icon:s.icon,iconAlt:s.iconAlt,key:o,loading:o===r(d[0]).KEYS.editProfilePhoto&&this.props.profilePicUploadIsInFlight,onClick:this.$NewUserActivatorsUnit7(o)})),t},[]);return 0===c.length?void 0!==s?s:null:a(d[5]).createElement("div",{className:o},a(d[5]).createElement(r(d[6]).Deck,{hasBlur:!r(d[4]).isMobile(),headerText:a(d[7]).GETTING_STARTED},c),a(d[5]).createElement(i(d[8]),{analyticsContext:this.props.analyticsContext,hasExistingPic:!1,ref:t=>this.$NewUserActivatorsUnit5=t}))}})));e.default=o,e.ACTIVATOR_CARD_MODULES=r(d[0]).MODULES},13434880,[13434881,9895951,10158307,10027076,9895955,10027128,9895945,10158314,10485792,9699354,10158303,6,5,10158093]);