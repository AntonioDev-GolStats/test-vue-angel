<template>
    <div>
        <div class="container">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" >QA ID</th>
                        <th scope="col">PLAYER NAME</th>
                        <th scope="col">TEAM</th>
                        <th scope="col"># ASSESSMENTS</th>
                        <th scope="col">LAST EVALUETION</th>
                        <th scope="col">TEMPLEATE TYPE</th>
                        <th scope="col">DETAIL</th>
                        <th scope="col">#</th>
                    </tr>   
                </thead>
                <tbody>
                    <tr v-for="p in dataPlayerUser" :key="p.id">
                    <th scope="row">{{ p.qa_id}}</th>
                    <td>{{ p.player_name }}</td>
                    <td>
                        <img :src="p.team_logo" alt="team" width="30px" height="30px">
                        <span>{{ p.team_name }}</span>    
                    </td>
                    <td>{{ QtyEvaluation(p.assesments) }}</td>
                    <td>@mdo</td>
                    <td>{{ p.template_type }}</td>
                    <td> Cycle {{ allCycles(p.cycles) }} of {{ currentCycle(p.cycles) }} </td>
                    <td>
                        <button type="button" class="btn btn-light">Light</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
</template>

<script>
import db from '../data/evaluated-players.json'

export default {
    name: 'List',
    data () {
        return{
            dataPlayer: [],
            dataPlayerUser: [],
           
        }
    },


    created(){
        this.dataPlayer.push(db) 
        this.dataPlayerUser = this.dataPlayer[0].data.players
        console.log(this.dataPlayerUser)

    },

    methods: {
        allCycles(cycles) {
            let current= 0
            for( let c in cycles){
                current ++
            }
           return current
           current = 0
        },
        currentCycle(cycles){
            let current = cycles.filter( c => c.current === 1 )
            return current[0].cycle
        },
        lastEvaluation(date){

        },
        QtyEvaluation(Qty){
            let AllQty = 0
            for( let q in Qty){
                AllQty ++
            }
           return AllQty
           AllQty = 0
        }
    },

}
</script>

<style>

</style>