(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/FileInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/FileInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  model: {
    prop: "files",
    event: "change"
  },
  props: {
    files: {},
    // name: { type: String, required: true },
    accept: {
      type: String,
      "default": ".gif, .jpg, .jpeg, .png, .doc, .docx, .pdf"
    },
    label: {
      type: String,
      "default": "Click Here to Upload"
    },
    maxnumber: {
      type: Number,
      "default": 1
    }
  },
  data: function data() {
    return {
      maxNumber: this.maxnumber,
      id: 0,
      tmpFiles: []
    };
  },
  watch: {
    files: function files(val) {
      if (val.length == 0) {
        this.tmpFiles = [];
      }
    }
  },
  computed: {
    getFiles: function getFiles() {
      var list = new DataTransfer();

      _.each(this.tmpFiles, function (item) {
        list.items.add(item.file);
      });

      return list.files;
    }
  },
  methods: {
    getName: function getName() {
      if (this.maxNumber <= 1) {
        return this.name;
      }

      return this.name + "[]";
    },
    validateMaxNumber: function validateMaxNumber(length) {
      if (this.maxNumber >= length + this.tmpFiles.length) {
        return true;
      }

      var message = "No more than " + this.maxNumber + " File is allowed";
      window.flash().error(message);
      throw new Error(message);
    },
    chooseFile: function chooseFile(event) {
      this.$refs.files.click();
    },
    handleFilesUpload: function handleFilesUpload() {
      var vm = this;
      var files = this.$refs.files.files;
      this.validateMaxNumber(files.length);

      for (var i = 0; i < files.length; i++) {
        vm.tmpFiles.push({
          id: vm.id + 1,
          file: files.item(i),
          src: this.readUrl(files.item(i), vm.id + 1),
          name: files.item(i).name
        });
        vm.id = vm.id + 1;
      }

      this.$refs.files.files = this.getFiles;
      this.$emit("change", this.getFiles);
    },
    remove: function remove(id) {
      var index = this.tmpFiles.findIndex(function (f) {
        return f.id == id;
      });
      this.tmpFiles.splice(index, 1);
    },
    readUrl: function readUrl(file, id) {
      var vm = this;
      var reader = new FileReader();

      reader.onload = function (e) {
        var index = vm.tmpFiles.findIndex(function (f) {
          return f.id == id;
        });
        vm.tmpFiles[index].src = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    isFacebookApp: function isFacebookApp() {
      var ua = navigator.userAgent || navigator.vendor || window.opera;
      return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
    }
  },
  mounted: function mounted() {
    if (this.isFacebookApp()) {
      this.$refs.files.removeAttribute("accept");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/FileInput.vue?vue&type=template&id=2780721a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/FileInput.vue?vue&type=template&id=2780721a& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("input", {
        ref: "files",
        staticClass: "hidden",
        attrs: {
          type: "file",
          accept: _vm.accept,
          name: _vm.getName(),
          multiple: ""
        },
        on: {
          change: function($event) {
            return _vm.handleFilesUpload()
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "border-4 border-dashed border-gray-500 w-full bg-white h-20 px-6 flex items-center justify-center rounded-lg",
          on: { click: _vm.chooseFile }
        },
        [_c("p", [_vm._v(_vm._s(_vm.label))])]
      ),
      _vm._v(" "),
      _vm._l(_vm.tmpFiles, function(file) {
        return _c("div", { key: file.id }, [
          _c(
            "div",
            {
              staticClass:
                "flex items-center bg-gray-100 pl-2 pr-4 py-2 rounded-lg my-1"
            },
            [
              _c("img", {
                staticClass:
                  "border-2 border-white rounded-lg w-12 h-10 shadow",
                attrs: { src: file.src }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "flex-1 px-3" }, [
                _c("span", { staticClass: "text-gray-800" }, [
                  _vm._v(_vm._s(file.name))
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "cursor-pointer",
                  on: {
                    click: function($event) {
                      return _vm.remove(file.id)
                    }
                  }
                },
                [_vm._v("×")]
              )
            ]
          )
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/FileInput.vue":
/*!***********************************************!*\
  !*** ./resources/js/Components/FileInput.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileInput_vue_vue_type_template_id_2780721a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileInput.vue?vue&type=template&id=2780721a& */ "./resources/js/Components/FileInput.vue?vue&type=template&id=2780721a&");
/* harmony import */ var _FileInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileInput.vue?vue&type=script&lang=js& */ "./resources/js/Components/FileInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileInput_vue_vue_type_template_id_2780721a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileInput_vue_vue_type_template_id_2780721a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/FileInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/FileInput.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Components/FileInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FileInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/FileInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/FileInput.vue?vue&type=template&id=2780721a&":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/FileInput.vue?vue&type=template&id=2780721a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInput_vue_vue_type_template_id_2780721a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FileInput.vue?vue&type=template&id=2780721a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/FileInput.vue?vue&type=template&id=2780721a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInput_vue_vue_type_template_id_2780721a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInput_vue_vue_type_template_id_2780721a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);