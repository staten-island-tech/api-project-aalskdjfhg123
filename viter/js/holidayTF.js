export async function holidayTF() {
    try {
        const slop = await fetch(`https://date.nager.at/api/v3/IsTodayPublicHoliday/US`
        );
        if (slop.status = 204) {
            throw new Error(slop.statusText)
        } else {
            document.querySelector("h1").innerHTML = "yes"}


    } catch (error) {
        document.querySelector("h1").innerHTML = "no"
    }

}