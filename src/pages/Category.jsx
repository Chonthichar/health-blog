import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {collection, getDocs, query, where, orderBy, limit, startAfter,} from "firebase/firestore";
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import ListingItem from "../components/ListingItem";
import Spinner from "./Spinner";


// import Spinner from '../components/Spinner'

function Category() {
    const [listings, setListings] = useState(null)
    const [loading, setLoading] = useState(true)
    const [lastFetchListing, setLastFetchListing] = useState(null)


    const params = useParams()

    useEffect(() => {
        const fetchListings = async () => {
            try {
                //    Get Reference
                const listingsRef = collection(db, 'listings')

                //    create a query
                const q = query(listingsRef, where('type', '==', params.categoryName),
                    orderBy('timestamp', 'desc'),
                    limit(4))

                //Excute query
                const querySnap = await getDocs(q)

                const lastVisible = querySnap.docs[querySnap.docs.length - 1]
                setLastFetchListing(lastVisible)

                let listings = []
                querySnap.forEach((doc) => {
                    console.log(doc.data())
                    //important part need to set on others part
                    return listings.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })

                setListings(listings)
                setLoading(false)
            } catch (error) {
                toast.error('could not fetch listing')
            }
        }
        fetchListings()
        //    always add depencies
    }, [params.categoryName])


    //Pagination / Load more
    const onFetchMoreListings = async () => {
        try {
            //    Get Reference
            const listingsRef = collection(db, 'listings')

            //    create a query
            const q = query(listingsRef, where('type', '==', params.categoryName),
                orderBy('timestamp', 'desc'),
                startAfter(lastFetchListing),
                limit(4))

            //Excute query
            const querySnap = await getDocs(q)

            const lastVisible = querySnap.docs[querySnap.docs.length - 1]
            setLastFetchListing(lastVisible)

            let listings = []
            querySnap.forEach((doc) => {
                return listings.push({
                    id: doc.id,
                    data: doc.data()
                })
            })

            setListings((prevState) => [...prevState, ...listings])
            setLoading(false)
        } catch (error) {
            toast.error('could not fetch listing')
        }
    }

    return (
        <div className='listing-conclusion container'>
            <header>
                <p className='PageHeader category-pageHeader main-topic-blogs'>
                    {params.categoryName === 'rent'
                        ? 'Inspirations Topics'
                        : 'Food and Daily Diet'}
                </p>
                <p className='check-out'>check out</p>
            </header>
            {loading ? (<p><Spinner/></p>) : listings && listings.length > 0 ?
                <>
                    <main className='categoryListings' style={{textDecoration: 'none'}}>
                        {listings.map((listing) => (
                            // <h3 key={listing.id}>{listings.data.name}</h3>
                            <ListingItem
                                className='listingItem'
                                listing={listing.data}
                                id={listing.id}
                                key={listing.id}/>
                        ))}
                    </main>
                    <br/>
                    <br/>
                    {lastFetchListing && (
                        <p className='loadMore' onClick={onFetchMoreListings}><Spinner/></p>
                    )}

                </>

                : (
                    <p>No listing for {params.categoryName}</p>)}

        </div>
    )
}

export default Category