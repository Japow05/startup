import React from 'react';

export function Scores() {
    return (
        <main class="container-fluid bg-primary-subtle text-center text-primary-emphasis">
            <h3>2x5 Difficulty Times</h3>
                <table class="table table-primary table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Modern</td>
                            <td>0:32.07</td>
                            <td>Sept 19, 2026</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jack</td>
                            <td>0:35.44</td>
                            <td>Sept 14, 2026</td>
                        </tr>
                    </tbody>
                </table>
            <h3>3x5 Difficulty Times</h3>
                No records have been set. Try adding one of your own!
            <h3>4x5 Difficulty Times</h3>
                No records have been set. Try adding one of your own!
            <h3>5x5 Difficulty Times</h3>
                No records have been set. Try adding one of your own!
        </main>
    )
}