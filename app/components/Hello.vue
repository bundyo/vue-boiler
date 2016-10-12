<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <span> from {{ appName }} running on {{ platform }} </span>
    </div>
</template>

<script>
    import {remote} from 'electron'
    import os from 'os'

    export default {
        data () {
            return {
                platform: os.platform(),
                appName: remote.app.getName(),
                msg: 'Hello World, Yo!'
            }
        }
    }
</script>
