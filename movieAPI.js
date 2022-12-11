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
    Movie1Details() {
        console.log(this.Movie1) 
    }
    Movie1Tails() {
        console.log("The Lord of the Rings is a series of three epic fantasy adventure films directed by Peter Jackson, based on the novel The Lord of the Rings by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King.Released in 2001.")
    }

    Movie2Details() {
        console.log(this.Movie2) 
    }

    Movie2Tails() {
        console.log("An engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence. First Episode 2005")}

        Movie3Details() {
            console.log(this.Movie3) 
        }
    
        Movie3Tails() {
            console.log("Childhood friends Rafe and Danny become army pilots and meet Evelyn, a navy nurse. However, the three of them later find themselves in the middle of the attack on Pearl Harbour during World War II. Released 25 May 2001.")
    }

    Movie4Details() {
        console.log(this.Movie4) 
    }

    Movie4Tails() {
        console.log("An attack on the Chinese ambassador sends Lee and Carter to Paris where they attempt to capture the Triads. On the other hand, Lee encounters someone from his past. Released 10 August 2007.")
}

Movie5Details() {
    console.log(this.Movie5) 
}

Movie5Tails() {
    console.log("Ex-soldier Frank Brayker (William Sadler) is the guardian of an ancient key that can unlock tremendous evil; the sinister but charming Collector (Billy Zane) is a demon who wants the key so he can initiate the apocalypse. On the run from wicked mercenaries for almost 90 years, Brayker finally stops in at a boarding house in New Mexico where -- with the help of its quirky residents -- he plans to face off against the Collector and his band of ghouls, preventing them from ever seizing the key. Initial Release 13 January 1995")
}

Movie6Details() {
    console.log(this.Movie6) 
}

Movie6Tails() {
    console.log("An evil smuggler plans to steal the Crown Jewels of the United Kingdom. After the country's top agents are killed, the only remaining hope is Johnny English, a rather unintelligent spy. Released 6 April 2003 in UK")
}

Movie7Details() {
    console.log(this.Movie7) 
}

Movie7Tails() {
    console.log("When Happy learns that his grandmother is going to lose her house, he decides to enter the golf tournament to win the prize money to save her home, Released 6 February 1996. ")
}

Movie8Details() {
    console.log(this.Movie8) 
}

Movie8Tails() {
    console.log("Eight-year-old Kevin is accidentally left behind when his family leaves for France. At first, he is happy to be in charge, but when thieves try to break into his home, he tries to put up a fight, Released 14 December 1990 in Ghana.")
}

Movie9Details() {
    console.log(this.Movie9) 
}

Movie9Tails() {
    console.log("An ex-soldier turned mercenary 'transporter' moves goods, human or otherwise, from one place to another. Complications arise when a job goes astray and he has to save the life of his female cargo. Released 2 October 2002.")
}

Movie10Details() {
    console.log(this.Movie10) 
}

Movie10Tails() {
    console.log("Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.Released 14 November 2001.")
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

Store.Movie1Details()

Store.Movie1Tails()

Store.Movie2Details()

Store.Movie2Tails()

Store.Movie3Details()

Store.Movie3Tails()

Store.Movie4Details()

Store.Movie4Tails()

Store.Movie5Details()

Store.Movie5Tails()

Store.Movie6Details()

Store.Movie6Tails()

Store.Movie7Details()

Store.Movie7Tails()

Store.Movie8Details()

Store.Movie8Tails()

Store.Movie9Details()

Store.Movie9Tails()

Store.Movie10Details()

Store.Movie10Tails()

Movies.storeOwner = `Chuma Bosah`
console.log(Movies)

