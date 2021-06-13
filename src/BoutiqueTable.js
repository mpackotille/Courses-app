export function BoutiqueTable(){
    const boutiques=[
        {nom:"CARREFOUR",distance:"100KM"},
        {nom:"AUCHAN",distance:"200KM"},
        {nom:"LECLERC",distance:"300KM"},
        {nom:"LIDL",distance:"400KM"},
        {nom:"EATALY",distance:"500KM"},
    ]
    return (<table>
        <thead>
          <th>NOM</th><th>DISTANCE</th>
        </thead>
         {boutiques.map((boutique)=>
         <tr>
             <td>{boutique.nom}</td><td>{boutique.distance}</td>
         </tr>
         )}

      </table>);
}