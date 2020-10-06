<template>
    <div class="py-4 px-4">
        <h1 id="title">{{ title.part_1 }}<br>{{ title.part_2 }}<br>{{ title.part_3 }}</h1>

        <div class="row">
            <div class="col">
                <div class="info p-4 m-4">
                    <p>
                        <i>{{ welcome_text }}</i>
                    </p>
                </div>
                <div class="info p-4 m-4">
                    <p>{{ you_ll_be_able_to }}</p>
                </div>
            </div>

            <div class="col"></div>
        </div>

        <div class="row">
            <div class="col">
                <router-link to="/waste-simulator" tag="span">
                    <button class="button big-button d-flex p-4 m-2 justify-content-center">
                        <div class="icon align-self-center mr-4"></div>
                        <div class="text-left big-button-line-height">
                            <small>{{ btns.i_am_simulating }}</small> <br> <strong>{{ btns.food_waste }}</strong>
                        </div>
                    </button>
                </router-link>
            </div>

            <div class="col">
                <router-link to="/carbon-simulator" tag="span">
                    <button class="button big-button d-flex p-4 m-2 justify-content-center">
                        <div class="icon align-self-center mr-4"></div>
                        <div class="text-left big-button-line-height">
                            <small>{{ btns.i_am_simulating }}</small> <br> <strong>{{ btns.carbon_impact }}</strong>
                        </div>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import HomePageText from "../../texts/HomePageText";
    export default {
        mixins: [
            HomePageText
        ]
    }
</script>
