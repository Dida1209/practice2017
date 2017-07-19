export default {
  props: {
    columns: {
      type: Array,
      default () {
        return [];
      }
    },
    data: {
      type:Array,
      default () {
        return [];
      }
    }
  },
  data () {
    return {
      currentColums: [],
      currentData: []
    }
  },
  methods: {
    makeColumns () {
      this.currentColums = this.columns.map((col,index) => {
        col._sortType = 'normal';
        col._index = index;
        return col;
      })
    },
    makeData () {
      console.log('makeData');
      this.currentData = this.data.map((row,index) => {
        row._index = index;
        return row;
      })
    },
    handleSortByAsc (index) {
      const key = this.currentColums[index].key;
      this.currentColums.forEach((col) => {
        col._sortType = 'normal';
      });
      this.currentColums[index]._sortType = 'asc';
      this.currentData.sort((a, b) => {
        console.log(a[key] > b[key] ? 1: -1);
        return a[key] > b[key] ? 1 : -1;
      })
    },
    handleSortByDesc (index) {
      console.log('handleSortByDesc');
      const key = this.currentColums[index].key;
      this.currentColums.forEach((col) => {
        col._sortType = 'normal';
      });
      this.currentColums[index]._sortType = 'desc';
      this.currentData.sort((a,b) => {
        console.log(a[key] < b[key] ? 1: -1);
        return a[key] < b[key] ? 1: -1;
      })
    }
  },
  mounted () {
    this.makeColumns();
    this.makeData();
  },
  render (h) {
    const ths = [];
    const trs = [];

    this.currentColums.forEach((col,index) => {
      if(col.sortable) {
        ths.push(h('th', [
          h('span', col.title),
          h('a', {
            class: {
              on: col._sortType === 'asc'
            },
            on: {
              click: () => {
                this.handleSortByAsc(index)
              }
            }
          }, '↑'),
          h('a', {
            class: {
              off: col._sortType === 'desc'
            },
            on: {
              click: () => {
                this.handleSortByDesc(index)
              }
            }
          },'↓')
        ]))
      }else {
        ths.push(('th',col.title));
      }
    })
    this.currentData.forEach((row) => {
      const tds = [];
      this.currentColums.forEach((cell) => {
        tds.push(h('td', row[cell.key]))
      });
      trs.push(h('tr', tds));
    });

    return h('table', [
      h('thead', [
          h('tr', ths)
      ]),
      h('tbody', trs)
    ])
  },
  watch: {
    data () {
      this.makeData();
      const sortedColumn = this.currentColums.filter((col) =>{
        return col._sortType !== 'normal';
      });
      if(sortedColumn.length > 0) {
        if(sortedColumn[0]._sortType === 'asc') {
          this.handleSortByAsc(sortedColumn[0]._index);
        }else {
          this.handleSortByDesc(sortedColumn[0]._index);
        }
      }
    }
  }
}
