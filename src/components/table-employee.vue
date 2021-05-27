
<template>
  <div class="table-employee">
    <table>
      <tr>
        <th>Employee's name</th>
        <th>Employee's age</th>
      </tr>
      <tr v-for="(item) in this.$store.state.employees" :key="item">
        <td>{{item.employee_name}}</td>
        <td>{{item.employee_age}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data () {
    return { };
  },
  methods: {
    ...mapActions({
      getEmployees: "GET_EMPLOYEES",
    }),
  },
  computed:
    mapState({
      employees: state => state.employees
    }),
  mounted () {
    this.getEmployees();
  },
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
