export async function holidayTF() {
    try {
        const slop = await fetch(`https://date.nager.at/api/v3/IsTodayPublicHoliday/US`
        );
        if (slop.status = 204) {
            throw new Error(slop.statusText)
        } else {
            console.log("yes")
        }


    } catch (error) {
        console.log("no")
    }

}