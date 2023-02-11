import React from "react";
import { MDBIcon } from 'mdb-react-ui-kit';
import { useState, useEffect } from "react";
import axios from "axios";

const AlbumList = () => {
    const [menus, setMenus] = useState([]);
    const [lists, setList] = useState([])

    useEffect(()=>{
        axios.get('https://photo.azurecloud.vn/api/v1/album-types/list-album-type-web')
        .then(json =>{
            console.log(json.data.data.albumType.data)
          let t = json.data.data.albumType.data;
          setMenus(t);
          
        })
    },[]);

    return(
        <div className="sidenav">
            <form className="form-search">
                <div className="search-list">
                    <input type="text" placeholder="Từ khóa tìm kiếm..."/>
                    <button type="submit" style={{float: "right"}}>
                        <MDBIcon fas icon="search" />
                    </button>
                </div>
            </form>

            <div className="menu-list">
                <div className="title">
                    Loại albums
                </div>
                <div className="item-list">
                    

                    {menus.map((menu) => (
                        <a href="#"><p>{menu.name}<span>{menu.countAlbum}</span></p></a>
                    ))}

                </div>
            </div>

            <div className="top-business">
                <div className="title">
                    Doanh nghiệp hàng đầu
                </div>
                <div className="box-item">
                    <div className="item">
                        <img src="https://minio.azurecloud.vn/album/upload/photos/business/2021/12/1640147802182logo.jpeg" alt=""/>
                        <div className="item-title">
                            <span><b>The Star</b></span>
                            <p><i>The Star</i></p>
                        </div>
                    </div>

                    

                    <div className="item">
                        <img src="https://minio.azurecloud.vn/album/upload/photos/business/2021/12/1640923797355default-avatar.png" alt=""/>
                        <div className="item-title">
                            <span><b>Xuan Vien</b></span>
                            <p><i>Vip pro</i></p>
                        </div>
                    </div>

                    <div className="item">
                        <img src="https://minio.azurecloud.vn/album/upload/photos/business/2021/12/1640160385315pi.jpeg" alt=""/>
                        <div className="item-title">
                            <span><b>House</b></span>
                            <p><i>The Star</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlbumList;