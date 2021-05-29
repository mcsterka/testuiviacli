
<template>
  <div class="table-employee">
      <div class="textfields">
        <p>Name:<input v-model="paramsToInsert.name" type="text" required placeholder="Employee's name"></p>
        <p>Salary:<input v-model="paramsToInsert.salary" type="number" required placeholder="Employee's salary"></p>
        <p>Age:<input v-model="paramsToInsert.age" type="number" required placeholder="Employee's age"></p>
    </div>
    <div><button class="custom-btn" @click="create()">Add Employee</button></div>
    <table>
      <tr>
        <th>Employee's name</th>
        <th>Employee's age</th>
      </tr>
      <tr v-for="(item) in this.employees" :key="item">
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
  components: {},
  methods: {
    ...mapActions({
      getEmployees: "GET_EMPLOYEES",
      createEmployee: "CREATE_EMPLOYEE"
    }),
    async create() {
      await this.createEmployee();
    },
  },
  computed:
    mapState({
      employees: state => state.employees,
      paramsToInsert: state => state.paramsToInsert
    }),
  mounted () {
    // this.getEmployees();
  },
};
</script>

<style>
.custom-btn {
  width: 200px;
  height: 50px;
  margin: 15px;
  border-radius: 3rem;
  border: 2px solid black;
  color: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(84,255,118,1) 0%, rgba(81,210,255,1) 100%);
}
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

input {
    border-radius: 0.5rem;
    margin: 5px;
}
</style>
