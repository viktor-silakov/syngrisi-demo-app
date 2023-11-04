/* eslint-disable max-len */
import React from 'react';
import { Paper, Title, Text, Image } from '@mantine/core';
import img from './img/lorem.webp';

export function Lorem() {
    const searchParams = new URLSearchParams(document.location.search);
    const broken = searchParams.get('version');
    return (
        <Paper>
            <Title order={1}>Lorem ipsum</Title>
            <Text size="xl">
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cumque doloremque doloribus
                    eaque fugit illum incidunt, minus, perferendis porro, provident sint suscipit tempore vel velit
                    veniam voluptas? Nobis, odit.
                </div>
                <div>Debitis delectus dolorem eos hic impedit minus nostrum obcaecati, porro quisquam unde. A ad
                    adipisci aliquam beatae cum deserunt dolor explicabo ipsa maiores nostrum, quasi quidem quisquam
                    recusandae reprehenderit voluptatem.
                </div>
                <div>Accusantium aspernatur atque corporis dignissimos, ducimus eaque, eius eligendi eveniet excepturi
                    fuga itaque iusto magnam nam necessitatibus optio perferendis possimus quas ratione rem
                    reprehenderit sed, similique soluta temporibus vel voluptates!
                </div>
                <div>Commodi iste labore nesciunt quibusdam tempore. Asperiores deleniti distinctio explicabo hic ipsum
                    modi quaerat quis veniam voluptates? Aut dolore eos est fuga hic id in, modi, nemo officia optio
                    saepe!
                </div>
                <div>Ab asperiores cumque debitis dolores eaque earum esse iusto laborum, maxime nemo neque nobis
                    nostrum nulla numquam praesentium provident qui quidem saepe soluta tempore totam unde veritatis
                    vitae voluptates voluptatum.
                </div>
                <div>Ea exercitationem libero natus neque placeat possimus quae reprehenderit, sit soluta totam.
                    Accusamus dolore esse excepturi illum impedit iusto labore, laborum laudantium mollitia omnis porro
                    provident quam, quisquam soluta voluptate.
                </div>
                <div>A, eaque eos in nihil numquam officia qui quibusdam recusandae veniam voluptatem. Commodi eum
                    exercitationem, fuga, illo iure laboriosam, libero minima nesciunt officia pariatur quibusdam rerum
                    tenetur. Accusamus, nam similique.
                </div>
                <div>A aut consequatur corporis deleniti, distinctio eligendi enim eos esse expedita facilis inventore
                    labore nostrum porro quia tempore ullam, ut. Aperiam earum esse mollitia nam odio porro sed, totam
                    ut?
                </div>
                <div>Explicabo magni porro repellat temporibus veritatis. Culpa eaque ipsum nemo repellat, suscipit
                    veniam! Alias dolore esse harum nihil quaerat recusandae similique, sint sit? A accusantium commodi
                    ea nam vitae voluptatem!
                </div>
                <div>Alias atque, blanditiis consequatur enim hic, ipsa libero nam, perferendis possimus praesentium
                    rerum saepe vero. Ad blanditiis ducimus fugit incidunt laudantium nemo nulla porro, quidem
                    reprehenderit sint. Consequatur cumque, qui.
                </div>
            </Text>
            <Image src={img} width="500" />
            <Text size="xl">
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cumque doloremque doloribus
                    eaque fugit illum incidunt, minus, perferendis porro, provident sint suscipit tempore vel velit
                    veniam voluptas? Nobis, odit.
                </div>
                <div>Debitis delectus dolorem eos hic impedit minus nostrum obcaecati, porro quisquam unde. A ad
                    adipisci aliquam beatae cum deserunt dolor explicabo ipsa maiores nostrum, quasi quidem quisquam
                    recusandae reprehenderit voluptatem.
                </div>
                <div>Accusantium aspernatur atque corporis dignissimos, ducimus eaque, eius eligendi eveniet excepturi
                    fuga itaque iusto magnam nam necessitatibus optio perferendis possimus quas ratione rem
                    reprehenderit sed, similique soluta temporibus vel voluptates!
                </div>
                <div>Commodi iste labore nesciunt quibusdam tempore. Asperiores deleniti distinctio explicabo hic ipsum
                    modi quaerat quis veniam voluptates? Aut dolore eos est fuga hic id in, modi, nemo officia optio
                    saepe!
                </div>
                <div>Ab asperiores cumque debitis dolores eaque earum esse iusto laborum, maxime nemo neque nobis
                    nostrum nulla numquam praesentium provident qui quidem saepe soluta tempore totam unde veritatis
                    vitae voluptates voluptatum.
                </div>
                <div>Ea exercitationem libero natus neque placeat possimus quae reprehenderit, sit soluta totam.
                    Accusamus dolore esse excepturi illum impedit iusto labore, laborum laudantium mollitia omnis porro
                    provident quam, quisquam soluta voluptate.
                </div>
                <div>A, eaque eos in nihil numquam officia qui quibusdam recusandae veniam voluptatem. Commodi eum
                    exercitationem, fuga, illo iure laboriosam, libero minima nesciunt officia pariatur quibusdam rerum
                    tenetur. Accusamus, nam similique.
                </div>
                <div>A aut consequatur corporis deleniti, distinctio eligendi enim eos esse expedita facilis inventore
                    labore nostrum porro quia tempore ullam, ut. Aperiam earum esse mollitia nam odio porro sed, totam
                    ut?
                </div>
                <div>Explicabo magni porro repellat temporibus veritatis. Culpa eaque ipsum nemo repellat, suscipit
                    veniam! Alias dolore esse harum nihil quaerat recusandae similique, sint sit? A accusantium commodi
                    ea nam vitae voluptatem!
                </div>
                <div>Alias atque, blanditiis consequatur enim hic, ipsa libero nam, perferendis possimus praesentium
                    rerum saepe vero Ad blanditiis ducimus fugit incidunt laudantium nemo
                    nulla porro, quidem
                    reprehenderit sint. Consequatur cumque, qui{broken === '4' ? '..' : '. '}
                </div>
            </Text>
        </Paper>
    );
}
