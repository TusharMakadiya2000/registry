import CommonLink from "../components/comman/Button";

export default function SearchPage() {
    return (
        <div className="w-1/2 mx-auto flex flex-col gap-5 items-start">
            <div className="">
                <CommonLink to="/" variant="primary">
                    Go Back
                </CommonLink>
            </div>
            <div className="text-6xl">About</div>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                id lacus vulputate, suscipit magna vel, viverra lacus. Maecenas
                eu sollicitudin nulla. Integer suscipit efficitur ante, sagittis
                aliquet ligula mollis et. Vestibulum faucibus commodo odio non
                aliquet. In hac habitasse platea dictumst. Ut diam felis, tempus
                non turpis eu, fermentum consequat elit. Suspendisse pharetra
                est nunc, sit amet pellentesque ex placerat eu. In hac habitasse
                platea dictumst. Nullam nec placerat ex, ac auctor neque. Ut eu
                convallis mauris, a ullamcorper neque. Etiam congue massa nec
                elementum egestas. Praesent efficitur nunc id elementum egestas.
                Fusce finibus volutpat sem, a sagittis tortor eleifend sed.
                Vivamus ac tellus nulla. Nam sed elit ex.
            </div>
        </div>
    );
}
