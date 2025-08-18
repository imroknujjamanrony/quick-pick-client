import React from 'react';
import { useLoaderData } from 'react-router';

const BlogsDetails = () => {
    const {image, title, date, categories, description} = useLoaderData()
    
    return (
        <div>
         <div className="space-y-4 rounded-lg bg-white p-4 sm:p-6 shadow-lg">
                   <img
                     className="w-full h-auto rounded-lg object-cover"
                     src={image}
                     alt="card navigate ui"
                   />
                   <div className="grid gap-2">
                     <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                       {title}
                     </h1>
                     <p className="text-sm sm:text-base text-center text-gray-500 dark:text-black/60">
                       {description}
                       <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore animi, cum dolores dicta placeat sunt quia voluptatem pariatur at! Sapiente rerum optio mollitia tempora nesciunt quia similique possimus maxime, facere iure tenetur beatae aut distinctio libero, ab ex exercitationem. Optio exercitationem dolores, iure dolor earum ea a explicabo eius obcaecati natus. Pariatur, illo inventore quaerat voluptatum nulla iusto omnis laborum modi atque nemo nam facilis distinctio exercitationem harum obcaecati a, cupiditate deserunt, aliquid voluptate! Nostrum placeat tenetur, fuga sed sunt excepturi id quaerat tempore? Saepe, debitis! Provident quo quos eos ipsam reprehenderit ea voluptatum illum, dolorem placeat accusantium ducimus veritatis autem impedit tenetur explicabo error sit assumenda? Temporibus ducimus fugit eaque inventore iure pariatur quia voluptatum fugiat commodi quisquam amet accusamus illo ullam magnam deserunt alias impedit officiis nesciunt quasi perferendis, sunt consequatur. Est enim similique, fugit at modi libero dignissimos minima numquam eligendi tempora, vero eum! Quae sed perferendis repellendus ad iste cumque, aliquid omnis earum sequi soluta tempora iure modi. Tempore totam animi optio, atque voluptates doloribus mollitia. Maiores, voluptates atque reiciendis excepturi officia neque voluptatem quia laudantium repellendus odit at vel impedit sapiente sit magnam delectus deleniti ipsam nesciunt tempora illo! Iusto, fugiat impedit quae in assumenda ducimus quas dolores ex commodi aspernatur, rem voluptates fugit blanditiis expedita molestias. Eum exercitationem minima veritatis iure et fugit voluptate perspiciatis sint fugiat distinctio totam temporibus id aut nemo, consectetur quaerat soluta asperiores expedita saepe modi? Deserunt praesentium nobis quas totam obcaecati laudantium aliquam dolores culpa fugit dolorum numquam, at ex architecto delectus dignissimos maiores unde esse quia animi perferendis! Mollitia soluta minus laborum, unde hic illo dolorem sapiente id odit praesentium sit numquam maxime rem rerum sed totam perferendis aliquid ab enim, nostrum impedit repudiandae aspernatur commodi laudantium. Nihil, ad voluptatibus optio quae fuga ea similique. Modi, earum atque reprehenderit asperiores quia reiciendis esse doloremque soluta perspiciatis dolorum inventore repellendus vitae velit consequatur labore aliquid voluptate natus veniam nobis beatae sunt, repellat adipisci ad. Temporibus ea incidunt voluptate eius itaque deserunt laboriosam exercitationem amet nam rerum soluta beatae consectetur ut dignissimos nostrum earum, repudiandae ipsum deleniti. Odio tenetur doloribus at unde. Voluptas itaque, eius excepturi consectetur, fuga quae recusandae nesciunt vel eaque consequatur sapiente inventore expedita explicabo deleniti ratione? Illo eaque autem dolore. Debitis cupiditate non soluta illum officiis culpa quibusdam delectus assumenda optio. Temporibus ad perferendis nam! Accusantium provident cupiditate ipsum, fugit repudiandae sed eaque distinctio excepturi?</p>
                     </p>
                    
                   </div>
                   <div className="flex flex-wrap gap-4">
                    
                   </div>
                 </div>
        </div>
    );
};

export default BlogsDetails;