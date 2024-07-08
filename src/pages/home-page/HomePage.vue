<template>
<HeaderLayout />
</template>
  <script>
  import Form from '../../services/form'
  import Service from '../../services/api'
  import { ref } from 'vue'
  import Pagination from '../../components/Pagination.vue'
  import Modal from '../../components/Modal.vue'
  import HeaderLayout from '@/components/HeaderLayout.vue'
  export default {
    components: {
      Pagination,
      Modal,
      HeaderLayout
    },
    setup() {
      const formSearch = ref(new Form({
        type: '',
        name: ''
      }))
      const sortField = ref(new Form({
        total: 0,
        hp: 0,
        attack: 0,
        defense: 0,
        sp_atk: 0,
        sp_def: 0,
        speed: 0,
        number: 0,
      }))
      const typeList = ref([])
      const dataList = ref([])
      const pagina = ref({})
      const perPage = ref(20)
      const paramsSort = ref('')
      const isShow = ref(false)
      const dataDetail = ref({})
      return {
        formSearch,
        dataList,
        pagina,
        perPage,
        paramsSort,
        sortField,
        typeList,
        dataDetail,
        isShow
      }
    },
    mounted() {
      this.getTypes()
      this.getList(1);
  
    },
    methods: {
      // -------reset --------
      resetForm() {
        this.paramsSort = "";
        this.formSearch.reset();
        this.sortField.reset();
        this.getList(1);
      },
      search() {
        this.paramsSort = "";
        this.sortField.reset();
        this.getList(1);
      },
      // -------action sort --------
      sortData(paramsSort, type) {
        this.sortField.reset();
        this.paramsSort = type === 'asc' ? `&sort=${paramsSort}` : `&sort=-${paramsSort}`;
        this.sortField[paramsSort] = type === 'asc' ? 1 : 2;
        setTimeout(() => {
          this.getList(1);
  
        }, 100);
      },
      onChangePage(page) {
        this.getList(page)
      },
      changeLimit(){
        this.getList(1)
      },
      // -------call api get list type --------
      async getTypes() {
        this.$emit("load-data", true);
        await fetch(Service.getListType())
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            this.typeList = data.data;
            this.$emit("load-data", false);
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            this.$emit("load-data", false);
          });
      },
      // -------params filter --------
      convertDataFilter() {
        const dataSearch = this.formSearch.getData();
        if (dataSearch.type) {
          const paramType = `filter` + `[type]`
          dataSearch[paramType] = dataSearch.type
          delete dataSearch.type
        } if (dataSearch.name) {
          const paramName = `filter` + `[name]`
          dataSearch[paramName] = dataSearch.name
          delete dataSearch.name
        }
        return dataSearch
  
      },
      // -------call api get list pokemons--------
      async getList(page = 1) {
        this.currentPage = page;
        let dataSearch = _.cloneDeep(this.convertDataFilter());
        let params = `${qs.stringify(dataSearch, {
          addQueryPrefix: true,
        })}&page[size]=${this.perPage}&page[number]=${this.currentPage}&sort=number`;
        if (this.paramsSort) {
          params += this.paramsSort;
        }
        this.$emit("load-data", true);
        await fetch(Service.getList(params))
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            this.dataList = data.data;
            this.pagina = data.meta;
            this.$emit("load-data", false);
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            this.$emit("load-data", false);
          });
      },
      // -------format dd/mm/yyyy hh:mm--------
      covertDate(date) {
        let dateObj = new Date(date);
        return `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
      },
  
      // -------show popup detail--------
      viewDetails(item) {
        const idPokemon = item.id || "";
        this.$emit("load-data", true);
        fetch(Service.getDetail(idPokemon))
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            this.dataDetail = data['data'];
            this.$emit("load-data", false);
            this.isShow = true
  
          })
          .catch(error => {
            this.$emit("load-data", false);
            console.error('There was a problem with the fetch operation:', error);
          });
      },
      // --- close popup---
      closePopup() {
        this.isShow = false;
        this.dataDetail = {}
      },
      // -------download function--------
      functionDownFile(response, filename) {
        var newBlob = new Blob([response], { type: response.type });
  
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        }
  
        const data = window.URL.createObjectURL(newBlob);
        var link = document.createElement("a");
        link.href = data;
        link.download = filename;
        link.click();
        setTimeout(function () {
          window.URL.revokeObjectURL(data);
        }, 100);
      },
      // -------download sprite--------
      downloadSprite(pokemon) {
        this.$emit("load-data", true);
        fetch(Service.downloadById(pokemon.id))
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.blob();
          })
          .then(blob => {
            this.functionDownFile(blob, pokemon.name);
            this.$emit("load-data", false);
  
          })
          .catch(error => console.error('There was a problem with the fetch operation:', error));
        this.$emit("load-data", false);
  
      }
    }
  }
  </script>
  