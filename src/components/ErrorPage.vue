<style src="../stylesheets/ErrorPage.css" scoped></style>

<template>
    <header>
        <img src="../assets/ban.png" />
    </header>
    <div class="container">
        <main>
            <div class="erreur">
                Erreur, retourne sur la page login</div>
            <div class="login-button">
                <router-link to="/login">
                    <p class="login">Login</p>
                </router-link>
            </div>
        </main>
    </div>
</template>