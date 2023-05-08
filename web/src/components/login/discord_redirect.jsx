const DiscordRedirect = () => {
    window.open('https://discord.gg/Q34PNZT9')
    setTimeout(async () => {
        window.location.assign('/home')
    }, 2000)
}
export default DiscordRedirect;