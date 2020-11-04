<template>
  <div>
    <input
      type="file"
      :accept="accept"
      :name="getName()"
      class="hidden"
      multiple
      ref="files"
      v-on:change="handleFilesUpload()"
    />
    <div
      class="border-4 border-dashed border-gray-500 w-full bg-white h-20 px-6 flex items-center justify-center rounded-lg"
      @click="chooseFile"
    >
      <p>{{ label }}</p>
    </div>
    <div v-for="file in tmpFiles" :key="file.id">
      <div class="flex items-center bg-gray-100 pl-2 pr-4 py-2 rounded-lg my-1">
        <img
          :src="file.src"
          class="border-2 border-white rounded-lg w-12 h-10 shadow"
        />
        <div class="flex-1 px-3">
          <span class="text-gray-800">{{ file.name }}</span>
        </div>
        <div class="cursor-pointer" @click="remove(file.id)">&times;</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: "files",
    event: "change",
  },
  props: {
    files: {},
    // name: { type: String, required: true },
    accept: {
      type: String,
      default: ".gif, .jpg, .jpeg, .png, .doc, .docx, .pdf",
    },
    label: {
      type: String,
      default: "Click Here to Upload",
    },
    maxnumber: { type: Number, default: 1 },
  },
  data() {
    return {
      maxNumber: this.maxnumber,
      id: 0,
      tmpFiles: [],
    };
  },
  watch: {
    files: function (val) {
      if (val.length == 0) {
        this.tmpFiles = [];
      }
    },
  },
  computed: {
    getFiles() {
      let list = new DataTransfer();
      _.each(this.tmpFiles, function (item) {
        list.items.add(item.file);
      });
      return list.files;
    },
  },
  methods: {
    getName: function () {
      if (this.maxNumber <= 1) {
        return this.name;
      }
      return this.name + "[]";
    },
    validateMaxNumber: function (length) {
      if (this.maxNumber >= length + this.tmpFiles.length) {
        return true;
      }
      let message = "No more than " + this.maxNumber + " File is allowed";
      window.flash().error(message);
      throw new Error(message);
    },
    chooseFile: function (event) {
      this.$refs.files.click();
    },
    handleFilesUpload() {
      let vm = this;
      let files = this.$refs.files.files;
      this.validateMaxNumber(files.length);
      for (var i = 0; i < files.length; i++) {
        vm.tmpFiles.push({
          id: vm.id + 1,
          file: files.item(i),
          src: this.readUrl(files.item(i), vm.id + 1),
          name: files.item(i).name,
        });
        vm.id = vm.id + 1;
      }
      this.$refs.files.files = this.getFiles;
      this.$emit("change", this.getFiles);
    },
    remove: function (id) {
      const index = this.tmpFiles.findIndex((f) => f.id == id);
      this.tmpFiles.splice(index, 1);
    },
    readUrl: function (file, id) {
      let vm = this;
      var reader = new FileReader();
      reader.onload = function (e) {
        const index = vm.tmpFiles.findIndex((f) => f.id == id);
        vm.tmpFiles[index].src = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    isFacebookApp: function () {
      let ua = navigator.userAgent || navigator.vendor || window.opera;
      return ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
    },
  },
  mounted: function () {
    if (this.isFacebookApp()) {
      this.$refs.files.removeAttribute("accept");
    }
  },
};
</script>
