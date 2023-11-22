export default function ShopPage({ params }: { params: { slug: string[] } }){
     console.log(params.slug);
     return (<div>
          Shop page match {params.slug.join(",")}
     </div>)
}