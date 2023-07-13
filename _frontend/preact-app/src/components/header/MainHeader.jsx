import mainLogo from '../../assets/logo.png';
import userImage from '../../assets/user-image.png'
import { Heart, Cart3, Grid, Search } from 'react-bootstrap-icons';


export const MainHeader = () => {
    return <>
        <div className="w-full bg-blue-600 text-white flex px-4">
            <div className="container mx-auto">
                <div className="w-full flex gap-6 items-center">
                    <div className='w-20'>
                        <img src={ mainLogo } alt="profile-logo" className='w-full object-cover invert' draggable='false' />
                    </div>
                    <div className="flex-grow py-3">
                        <div className='border border-white/50 rounded-xl px-3 py-2 w-full flex gap-4'>
                            <div className='border-r border-white/20 pr-3'>
                                <button type='button' className='py-2 px-4 rounded-md transition duration-500 hover:bg-white/10 inline-flex items-center gap-3'>
                                    <Grid />
                                    <span>Kategori</span>
                                </button>
                            </div>
                            <input type="text" className='grow-1 bg-transparent outline-none text-lg w-full' />
                            <button type='button' className='bg-white rounded-lg text-black flex gap-2 items-center px-3'>
                                <Search />
                                <span>Cari</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="flex">
                            <div className='inline-flex gap-2 items-center px-4 py-1 transition rounded-md duration-500 hover:bg-white/10'>
                                <Heart className='text-xl' />
                                <span className='rounded-md bg-red-500 py-1 px-2 block text-white text-xs'>2</span>
                            </div>
                            <div className='inline-flex gap-2 items-center px-4 py-1 transition rounded-md duration-500 hover:bg-white/10'>
                                <Cart3 className='text-xl' />
                                <span className='rounded-md bg-red-500 py-1 px-2 block text-white text-xs'>5</span>
                            </div>
                            <div className='px-4 py-2 inline-flex items-center gap-3 flex-nowrap transition rounded-md duration-500 hover:bg-white/10'>
                                <div className='leading-none text-right'>
                                    <h5 className='text-md whitespace-nowrap'>Bima Pria Aditya</h5>
                                    <small className='font-light opacity-75'>bpabima@gmail.com</small>
                                </div>
                                <div className='w-10 h-10'>
                                    <img src={ userImage } alt="logo" className='w-full h-full rounded-lg object-contain' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}