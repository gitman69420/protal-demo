import React from "react";
import StoryItem from "./StoryItem";

function StoriesBar(){

    const list = [
        {
            url:"https://thumbs.dreamstime.com/b/modern-dance-22749512.jpg",

        },
        {
            url:"data:image/jpeg;base64,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",
            
        },
        {
            url:"https://images.stockfreeimages.com/1829/sfi226w/18291656.jpg",
            
        },
        {
            url:"https://media.istockphoto.com/photos/dancer-picture-id147668813?k=6&m=147668813&s=612x612&w=0&h=p0mEKllmiPktpwtjtg6Z3_5TVr2l4TwiB3oXcem5rS8=",
            
        },
        {
            url:"https://image.shutterstock.com/image-photo/beautiful-stylish-woman-singing-karaoke-260nw-1278460312.jpg",
            
        },
        {
            url:"https://image.shutterstock.com/image-photo/portrait-charming-pop-start-girl-260nw-1536622991.jpg",
            
        },
        {
            url:"https://st2.depositphotos.com/1570716/6928/i/600/depositphotos_69282757-stock-photo-young-woman-sing-holding-a.jpg",
            
        },
        {
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltGIo0XgBoW46LHEU2Vg1rG-o4UBOvdw5bg&usqp=CAU",
            
        },
    ];


    return(
        <div className="stories-bar">
            {
                list.map(
                    (storyImg, index) => (
                        <StoryItem key={index} source={storyImg.url}/>
                    )
                )
            }
        </div>
    );
}

export default StoriesBar;