export default {
    template: `         
                <section class="home">
                    <div class="box-center-container">
                        <div class="box-center">
                            <div>
                                <img src="img/lucky-cat-toy.svg" class="lucky-cat">
                            </div>
                            <div class="home-text">
                                If you can get along with japanese,<br>then i did a good job.
                                <br>
                                <br>
                                Good luck figuring it all out!
                            </div>
                            <router-link to="/keep">
                                <button class="ripple glow-button btn-icon btn-mail">電子メール</button>
                                <button class="ripple glow-button btn-icon btn-keep">キープ</button>
                            </router-link>
                        </div>
                    </div>
                </section>
            `
}