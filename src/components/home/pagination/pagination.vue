<template>
    <ul class="pagination">
      <li class="pagination-item">
        <button
          type="button"
          class="btn btn-primary"
          @click="onClickFirstPage"
        :disabled="isInFirstPage"
        >
          First
        </button>
      </li >
  
      <li  class="pagination-item">
        <button
          type="button"
          @click="onClickPreviousPage"
        :disabled="isInFirstPage"
        class="btn btn-primary"

        >
          Previous
        </button>
      </li>
  
  
      <li  class="pagination-item"
      v-for="page in pages"
      :key="page.name"
    >
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
        class="btn btn-primary"

      >
        {{ page.name }}
      </button>
    </li>

  
  
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickNextPage"
        :disabled="isInLastPage"
        class="btn btn-primary"

        >
          Next
        </button>
      </li>
  
      <li class="pagination-item">
        <button
          type="button"
          @click="onClickLastPage"
        :disabled="isInLastPage"
        class="btn btn-primary"

        >
          Last
        </button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      maxVisibleButtons: {
        type: Number,
        required: false,
        default: 3
      },    
      totalPages: {
        type: Number,
        required: true
      },
      perPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      }
    },
    computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    }
  }
  };
  </script>
<style scoped>
.pagination {
  list-style-type: none;
  
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: rgb(248, 52, 111);;
  color: gray;
}
ul li{
    padding: 20px 10px;
}
</style>