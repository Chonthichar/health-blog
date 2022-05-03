import {Link} from 'react-router-dom'
import {FaTrash} from "react-icons/fa";
import {FaBacon} from "react-icons/fa";
import {FaRestroom} from "react-icons/fa";
import {FaEdit} from "react-icons/fa";


function ListingItem({listing, id, onEdit, onDelete}) {
    return (
        <li className='categoryListing container'>
            <Link to={`/category/${listing.type}/${id}`}
                  className='categoryListingLink'>
                <img src={listing.imageUrls[0]} alt={listing.name}
                     className='categoryListing'
                />
                <div className='categoryListingDetails'>
                    <p className='categoryListingLocation'>{listing.location}</p>
                    <p className='categoryListingName'>{listing.name}</p>
                    <p className='categoryListingPrice'>
                        ${listing.offer ? listing.discountedPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        : listing.regularPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        {listing.type === 'rent' && ' / Month'}
                    </p>
                    <div className='categoryListingInfoDiv'>
                        <FaRestroom/>
                        <p className='categoryListingInfoText'>
                            {listing.bedRooms > 1 ? `${listing.bedRooms}
                            Bedroom` : '1 Bedroom'}
                        </p>
                        <FaBacon/>
                        <p className='categoryListingInfoText'>
                            {listing.bathRooms > 1 ? `${listing.bathRooms}
                            Bathroom` : '1 Bathroom'}
                        </p>
                    </div>
                </div>
            </Link>

            {onDelete && (
                <FaTrash className='removeIcon' fill='rgb(231, 76,60)'
                         onClick={() => onDelete(listing.id, listing.name)}/>)}
            )}

            {onEdit &&
            <FaEdit className='editIcon' onClick={() => onEdit(id)} />}
        </li>
    )
}

export default ListingItem