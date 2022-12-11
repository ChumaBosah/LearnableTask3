class Movies {
    Movie1 = `The Lord Of The Rings`
    Movie2 = `Prison Break`
    Movie3 = `Pearl Harbour`
    Movie4 = `Rush Hour 3`
    Movie5 = `Demon Night`
    Movie6 = `Johnny English`
    Movie7 = `Happy-Gilmoore`
    Movie8 = `Home Alone`
    Movie9 = `The Transporter`
    Movie10 = `Harry Potter`  

    static rentalPrice = 500
    static rentalPeriod =`72hours`
    static storeOwner = `Chuma`
    static PROMO = "Rent 3 Movies and Enjoy 30% Discount"


    ForRent () {
        console.log(`This movie is Available`)
    }

    Rented () {
        console.log("This movie is not available, please check back later")
    }

    RentalComplete () {
        console.log(`Enjoy your Rental`)
    }

    AllMovies() {
        console.log(this)
    }

    AvailableMovie1() {
        console.log(this.Movie1)
    }

    AvailableMovie2() {
        console.log(this.Movie2)
    }

    UnAvailableMovie3() {
        console.log(this.Movie3)
    }

    AvailableMovie4() {
        console.log(this.Movie4)
    }

    UnAvailableMovie5() {
        console.log(this.Movie5)
    }

    RentedMovie6() {
        console.log(this.Movie6)
    }

    RentedMovie7() {
        console.log(this.Movie7)
    }
    AvailableMovie8() {
        console.log(this.Movie8)
    }

    UnAvailableMovie9() {
        console.log(this.Movie9)
    }

    AvailableMovie10() {
        console.log(this.Movie10)
    }
}

const Store = new Movies()

Store.AllMovies()

Store.AvailableMovie1()

Store.ForRent()

Store.AvailableMovie2()

Store.ForRent()

Store.UnAvailableMovie3()

Store.Rented()

Store.AvailableMovie4()

Store.ForRent()

Store.UnAvailableMovie5() 

Store.Rented()

Store.RentedMovie6()

Store.RentalComplete()

Store.RentedMovie7()

Store.RentalComplete()

Store.AvailableMovie8()

Store.ForRent()

Store.UnAvailableMovie9()

Store.Rented()

Store.AvailableMovie10()

Store.ForRent()


Movies.storeOwner = `Chuma Bosah`
console.log(Movies)

